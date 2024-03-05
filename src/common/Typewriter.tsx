import { useTypewriter } from "../hooks/useTypewriter";


interface IProps {
    text: string;
    speed: number;
}
const Typewriter = ({ text, speed } : IProps) => {
    const displayText = useTypewriter(text, speed);
  
    return <p>{displayText}</p>;
  };
  
  export default Typewriter;