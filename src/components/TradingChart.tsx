
import { useEffect, useRef } from 'react';

interface CandleData {
  open: number;
  high: number;
  low: number;
  close: number;
  x: number;
}

const TradingChart = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const candlesRef = useRef<CandleData[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 400;
    canvas.height = 200;

    const generateCandles = () => {
      const candles: CandleData[] = [];
      let price = 1.0800;
      
      for (let i = 0; i < 20; i++) {
        const change = (Math.random() - 0.5) * 0.01;
        const open = price;
        const close = price + change;
        const high = Math.max(open, close) + Math.random() * 0.005;
        const low = Math.min(open, close) - Math.random() * 0.005;
        
        candles.push({
          open,
          high,
          low,
          close,
          x: i * 18 + 10,
        });
        
        price = close;
      }
      
      candlesRef.current = candles;
    };

    const drawCandle = (candle: CandleData, index: number) => {
      const { open, high, low, close, x } = candle;
      const maxPrice = Math.max(...candlesRef.current.map(c => c.high));
      const minPrice = Math.min(...candlesRef.current.map(c => c.low));
      const priceRange = maxPrice - minPrice;
      
      const yScale = (price: number) => {
        return 180 - ((price - minPrice) / priceRange) * 160;
      };
      
      const isGreen = close > open;
      const color = isGreen ? '#10B981' : '#EF4444';
      
      // Draw wick
      ctx.beginPath();
      ctx.moveTo(x + 6, yScale(high));
      ctx.lineTo(x + 6, yScale(low));
      ctx.strokeStyle = color;
      ctx.lineWidth = 1;
      ctx.stroke();
      
      // Draw body
      const bodyTop = yScale(Math.max(open, close));
      const bodyBottom = yScale(Math.min(open, close));
      const bodyHeight = Math.max(1, bodyBottom - bodyTop);
      
      ctx.fillStyle = color;
      ctx.fillRect(x + 2, bodyTop, 8, bodyHeight);
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw grid
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.1)';
      ctx.lineWidth = 0.5;
      
      for (let i = 0; i < 5; i++) {
        const y = (i + 1) * 35;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      
      candlesRef.current.forEach((candle, index) => {
        drawCandle(candle, index);
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };

    generateCandles();
    animate();

    const interval = setInterval(() => {
      // Update last candle
      const lastCandle = candlesRef.current[candlesRef.current.length - 1];
      if (lastCandle) {
        const change = (Math.random() - 0.5) * 0.005;
        lastCandle.close = lastCandle.open + change;
        lastCandle.high = Math.max(lastCandle.open, lastCandle.close) + Math.random() * 0.002;
        lastCandle.low = Math.min(lastCandle.open, lastCandle.close) - Math.random() * 0.002;
      }
    }, 1000);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      clearInterval(interval);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-auto rounded-lg bg-black/20 border border-trading-primary/20"
    />
  );
};

export default TradingChart;
