import { FaEye, FaEyeSlash } from "react-icons/fa";
interface EyeIconProps {
  onClick: () => void;
  isPasswordVisible: boolean;
}

const EyeIcon: React.FC<EyeIconProps> = ({ onClick, isPasswordVisible }) => {
  return (
    <div
      onClick={onClick}
      className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
    >
      {isPasswordVisible ? (
        <FaEyeSlash size={20} color="#666666" />
      ) : (
        <FaEye size={20} color="#666666" />
      )}
    </div>
  );
};

export default EyeIcon;
