import "./terminal.scss";
import MinimizeIcon from '@mui/icons-material/Minimize';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import CloseIcon from '@mui/icons-material/Close';

const Terminal = () => {
  return (
    <div className="terminal">
      <div className="terminal-btns">
        <MinimizeIcon className="btn"/>
        <CropSquareIcon className="btn"/>
        <CloseIcon className="btn"/>
      </div>
      <div className="terminal-box">
        <div className="terminal-text">
          <p>
            <span className="green">spencer@Xubuntu</span>:
            <span className="blue">~/about</span>${" "}
          </p>
          <div className="command-text">
            <p className="command">cat aboutMe.txt</p>
          </div>
        </div>
        <p className="about-txt">
          I'm a creative and detail oriented web developer that utilizes best
          practices to deliver websites in an efficient manner. I began learning
          web development in 2023 and have been improving my skills ever since.
          I understand the importance of meeting expectations and plan to
          deliver the best websites I can.
        </p>
      </div>
    </div>
  );
};

export default Terminal;
