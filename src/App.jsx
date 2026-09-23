import React, { useState, useEffect, useCallback } from 'react';
import ExperimentShell from './components/ExperimentShell';
import Screen00Failure from './components/screens/Screen00Failure';
import Screen01Voice from './components/screens/Screen01Voice';
import Screen02Anatomy from './components/screens/Screen02Anatomy';
import Screen03Spacing from './components/screens/Screen03Spacing';
import Screen04Personality from './components/screens/Screen04Personality';
import Screen05RealWorld from './components/screens/Screen05RealWorld';
import Screen06Psychology from './components/screens/Screen06Psychology';
import Screen07CrimeLab from './components/screens/Screen07CrimeLab';
import Screen08Instinct from './components/screens/Screen08Instinct';
import ScreenFinale from './components/screens/ScreenFinale';
import './styles/global.css';

const SCREENS = [
  'screen-00', 'exp-01', 'exp-02', 'exp-03', 'exp-04',
  'exp-05', 'exp-06', 'exp-07', 'exp-08', 'finale'
];

export default function App() {
  // Current active screen: 'screen-00' | 'exp-01' ... 'exp-08' | 'finale'
  const [currentScreen, setCurrentScreen] = useState('screen-00');
  const [resetKey, setResetKey] = useState(0);
  const [isPresenting, setIsPresenting] = useState(false);

  // Transitions
  const navigateTo = useCallback((screenId) => {
    setCurrentScreen(screenId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Global reset handler
  const handleGlobalReset = () => {
    setResetKey((prev) => prev + 1);
  };

  const togglePresentation = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen mode: ${err.message}`);
      });
      setIsPresenting(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      setIsPresenting(false);
    }
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsPresenting(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const activeTag = document.activeElement.tagName.toLowerCase();
      const activeType = document.activeElement.type?.toLowerCase();
      
      const isInput = activeTag === 'input' || activeTag === 'textarea' || activeTag === 'select';
      const isSlider = activeTag === 'input' && activeType === 'range';
      
      if (isInput && !isSlider) return;
      if (isSlider && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) return;

      if (e.key.toLowerCase() === 'p' && !e.ctrlKey && !e.metaKey && !e.altKey) {
        togglePresentation();
        return;
      }

      if (e.key === 'ArrowRight') {
        const currentIndex = SCREENS.indexOf(currentScreen);
        if (currentIndex < SCREENS.length - 1) {
          navigateTo(SCREENS[currentIndex + 1]);
        }
      } else if (e.key === 'ArrowLeft') {
        const currentIndex = SCREENS.indexOf(currentScreen);
        if (currentIndex > 0) {
          navigateTo(SCREENS[currentIndex - 1]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentScreen, navigateTo, togglePresentation]);

  return (
    <ExperimentShell 
      currentScreen={currentScreen}
      onSelectScreen={navigateTo}
      onResetGlobal={handleGlobalReset}
      isPresenting={isPresenting}
      onTogglePresentation={togglePresentation}
    >
      {currentScreen === 'screen-00' && (
        <Screen00Failure 
          key={`screen-00-${resetKey}`}
          onBeginExperiment={() => navigateTo('exp-01')} 
        />
      )}

      {currentScreen === 'exp-01' && (
        <Screen01Voice 
          key={`exp-01-${resetKey}`}
          onEnterTypelab={() => navigateTo('exp-02')} 
        />
      )}

      {currentScreen === 'exp-02' && (
        <Screen02Anatomy 
          key={`exp-02-${resetKey}`}
          onNavigateToSpacing={() => navigateTo('exp-03')} 
        />
      )}

      {currentScreen === 'exp-03' && (
        <Screen03Spacing 
          key={`exp-03-${resetKey}`}
          onNavigateToPersonality={() => navigateTo('exp-04')} 
        />
      )}

      {currentScreen === 'exp-04' && (
        <Screen04Personality 
          key={`exp-04-${resetKey}`}
          onRestartOrIndex={() => navigateTo('exp-05')} 
        />
      )}

      {currentScreen === 'exp-05' && (
        <Screen05RealWorld 
          key={`exp-05-${resetKey}`}
          onNavigateToPsychology={() => navigateTo('exp-06')} 
        />
      )}

      {currentScreen === 'exp-06' && (
        <Screen06Psychology 
          key={`exp-06-${resetKey}`}
          onNavigateToCrimeLab={() => navigateTo('exp-07')} 
        />
      )}

      {currentScreen === 'exp-07' && (
        <Screen07CrimeLab 
          key={`exp-07-${resetKey}`}
          onNavigateToInstinct={() => navigateTo('exp-08')} 
        />
      )}

      {currentScreen === 'exp-08' && (
        <Screen08Instinct 
          key={`exp-08-${resetKey}`}
          onCompleteTypelab={() => navigateTo('finale')} 
        />
      )}

      {currentScreen === 'finale' && (
        <ScreenFinale 
          key={`finale-${resetKey}`}
          onRestart={() => navigateTo('screen-00')} 
        />
      )}
    </ExperimentShell>
  );
}
