
import { useState, useEffect, useRef } from 'react';
import { Pause, Play, VolumeX, Volume2 } from 'lucide-react';
import { Button } from './ui/button';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('/public/Music/videoplayback.m4a');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(error => {
        console.error("Playback failed:", error);
      });
    }
    
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex bg-white rounded-full shadow-md p-2">
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={togglePlay}
        className="rounded-full w-8 h-8"
        title={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? <Pause size={16} /> : <Play size={16} />}
      </Button>
      
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={toggleMute}
        className="rounded-full w-8 h-8"
        title={isMuted ? 'Unmute' : 'Mute'}
      >
        {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
      </Button>
    </div>
  );
};

export default AudioPlayer;
