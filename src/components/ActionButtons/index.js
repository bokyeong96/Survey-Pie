import { useNavigate } from 'react-router-dom';

function ActionButtons({ questionsLength, step }) {
  const isLast = questionsLength - 1 === step;
  const navigate = useNavigate();
  return (
    <div>
      {step === 0 || (
        <button
          onClick={() => {
            // eslint-disable-next-line no-template-curly-in-string
            navigate('${step - 1}');
          }}
        >
          이전
        </button>
      )}
      {isLast ? (
        <button
          onClick={() => {
            navigate('/done');
          }}
        >
          제출
        </button>
      ) : (
        <button
          onClick={() => {
            // eslint-disable-next-line no-template-curly-in-string
            navigate('${step + 1}');
          }}
        >
          다음
        </button>
      )}
    </div>
  );
}

export default ActionButtons;
