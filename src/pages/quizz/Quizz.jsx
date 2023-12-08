import { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { quizz } from './questions';
import './quizz.css';

function Quizz() {
    useEffect(() => {
        //console.log(quizz);
    }, []);

    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [results, setResults] = useState({});
    const [answeredQuestions, setAnsweredQuestions] = useState([]);
    const [correctAnswersCount, setCorrectAnswersCount] = useState(0);

    const [konamiCode, setKonamiCode] = useState([]);
    const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];

    const handleAnswerSelection = (questionId, index) => {
        if (!answeredQuestions.includes(questionId)) {
        setSelectedAnswers((prevAnswers) => ({
            ...prevAnswers,
            [questionId]: index,
        }));
        }
    };

    const handleValidation = (questionId) => {
        if (!answeredQuestions.includes(questionId)) {
        const selectedAnswerIndex = selectedAnswers[questionId];
        const correctAnswer = quizz.find((q) => q.id === questionId).answer;
        const isCorrect = parseInt(selectedAnswerIndex) === parseInt(Object.keys(correctAnswer));

        if (isCorrect) {
            setCorrectAnswersCount((prevCount) => prevCount + 1);
        }

        setResults((prevResults) => ({
            ...prevResults,
            [questionId]: isCorrect,
        }));

        // Mark the question as answered
        setAnsweredQuestions((prevAnsweredQuestions) => [
            ...prevAnsweredQuestions,
            questionId,
        ]);
        }
    };

    const allQuestionsAnswered = quizz.every((question) =>
        answeredQuestions.includes(question.id)
    );

    const handleKeyDown = (event) => {
        setKonamiCode((prevCode) => [...prevCode, event.code]);
    
        if (konamiCode.length === konamiSequence.length) {
            const isKonamiCodeCorrect = konamiCode.every((key, index) => key === konamiSequence[index]);
            if (isKonamiCodeCorrect) {
                console.log('Réussi'); 
            }
            setKonamiCode([]);
        }
    };

    function handleValidationKonami() {
        btnValiderAction = true;
        console.log('Saisissez le code Konami');
        window.addEventListener('keydown', handleKeyDown);
    };
    
    return (
        <div className='quizz'>
            <h1>Quizz</h1>
            <Tabs>
                <TabList>
                {quizz.map((question) => (
                    <Tab key={question.id}>Question {question.id}</Tab>
                ))}
                </TabList>

                {quizz.map((question) => (
                <TabPanel key={question.id} className="tabPanel">
                    <div className='question'>
                        <p className='title'>
                            Question {question.id} : {question.question}
                        </p>
                        <div className='propositions'>
                            {question.propositions.map((prop, index) => (
                                <div key={index} className='proposition'>
                                    <input
                                        type='radio'
                                        id={`prop-${question.id}-${index}`}
                                        name={`question-${question.id}`}
                                        value={index + 1}
                                        checked={selectedAnswers[question.id] === index + 1}
                                        onChange={() =>
                                            handleAnswerSelection(question.id, index + 1)
                                        }
                                        disabled={answeredQuestions.includes(question.id)}
                                    />
                                    <label htmlFor={`prop-${question.id}-${index + 1}`}>
                                        {Object.values(prop)}
                                    </label>
                                </div>
                            ))}
                        </div>
                        <button
                            onClick={() => handleValidation(question.id)}
                            disabled={answeredQuestions.includes(question.id) ||
                                selectedAnswers[question.id] === undefined}
                        >
                            Valider
                        </button>
                        {results[question.id] !== undefined && (
                            <p className='response'>
                                {results[question.id] ? 'Bonne réponse' : 'Mauvaise réponse'}
                            </p>
                        )}
                        {results[question.id] !== undefined && !results[question.id] && (
                            <p className='correct-answer'>
                                La bonne réponse est :{' '}
                                {Object.values(
                                    quizz.find((q) => q.id === question.id).answer
                                )}
                            </p>
                        )}
                        {results[question.id] !== undefined && (
                            <div className='description'>
                                <p>A savoir : </p>
                                <p>
                                    {Object.values(
                                    quizz.find((q) => q.id === question.id).description
                                    )}
                                </p>
                            </div>
                        )}
                    </div>
                </TabPanel>
                ))}
            </Tabs>
            {allQuestionsAnswered && (
                <div className='congratulations-message'>
                    <p>Félicitations ! Vous avez terminé le quiz (et sans utiliser konami ^^).</p>
                    <p>Nombre de bonnes réponses : {correctAnswersCount}</p>
                </div>
            )}
        </div>
    );
}

export default Quizz;
