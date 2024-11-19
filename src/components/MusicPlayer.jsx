import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";

function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        audioRef.current = new Audio(
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lokiverse-nHD5fd7b89kt1i0Hx5kKKGsoLWUTQu.mp3"
        );
        audioRef.current.addEventListener("ended", () => setIsPlaying(false));
        return () => {
            if (audioRef.current) {
                audioRef.current.removeEventListener("ended", () => setIsPlaying(false));
                audioRef.current.pause();
            }
        };
    }, []);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <motion.button
            className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-blue-900 bg-opacity-50 backdrop-blur-md shadow-lg flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause music" : "Play music"}
        >
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
                {isPlaying ? (
                    <Pause className="w-8 h-8 text-white" />
                ) : (
                    <Play className="w-8 h-8 text-white" />
                )}
            </motion.div>
            <motion.div
                className="absolute w-full h-full rounded-full border-2 border-blue-400"
                initial={{ scale: 1 }}
                animate={{ scale: isPlaying ? [1, 1.2, 1] : 1 }}
                transition={{ repeat: isPlaying ? Infinity : 0, duration: 1.5 }}
            />
        </motion.button>
    );
}

export default MusicPlayer;
