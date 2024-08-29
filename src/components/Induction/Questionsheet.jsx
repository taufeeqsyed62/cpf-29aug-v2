import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Questionsheet.css';

const Questionsheet = () => {
    const questions = [
        {
          "que_id": 1,
          "que": "Which of the following scenarios best illustrates defamation?",
          "option1": "A social media user shares a post expressing their negative opinion about a public figure.",
          "option2": "An individual publicly reveals true information about a celebrity's past without their consent.",
          "option3": "A person intentionally spreads false rumours about a colleague with the aim of damaging their reputation.",
          "option4": "A journalist writes an article critiquing a politician's policies and actions.",
          "correct_answer": "option3" // Updated correct_answer
        },
        {
          "que_id": 2,
          "que": "Which of the following scenarios best represents online harassment, such as quarrels, bullying, and abusing?",
          "option1": "A group of individuals respectfully express their differing opinions in an online discussion forum.",
          "option2": "An individual repeatedly posts inflammatory comments with the intent to provoke and upset others.",
          "option3": "Two users engage in a constructive debate, presenting opposing viewpoints while maintaining mutual respect.",
          "option4": "A user offers constructive criticism in a polite and respectful manner, aiming to help improve the quality of discussion.",
          "correct_answer": "option2" // Updated correct_answer
        },
        {
          "que_id": 3,
          "que": "In a professional setting, a colleague is faced with a dilemma regarding whether to disclose a potential conflict of interest in a project they are working on. They are unsure whether it aligns with their personal beliefs and the standards of behavior expected in the workplace. Based on the scenario, which option best illustrates the primary difference between ethics and moral values?",
          "option1": "The colleague consults the company's code of conduct to determine the appropriate course of action, reflecting the application of ethics in professional settings.",
          "option2": "The colleague seeks advice from peers to understand the societal norms surrounding conflicts of interest, illustrating the influence of moral values.",
          "option3": "The colleague decides to proceed based on their interpretation of what is legally permissible, indicating a reliance on ethics rather than personal moral values.",
          "option4": "The colleague reflects on their own sense of right and wrong, considering how their actions align with their personal beliefs and values, exemplifying moral values.",
          "correct_answer": "option4" // Updated correct_answer
        },
        {
            "que_id": 4,
            "que": "A team of content creators is discussing their approach to producing content for their online platform. They are reviewing principles and guidelines for maintaining ethics in content production. Based on the scenario, which option represents an incorrect statement according to the principles and guidelines for maintaining ethics in content production?",
            "option1": "During the discussion, one team member suggests that content creators should actively engage in discrimination while creating content, advocating for biased practices.",
            "option2": "Another team member emphasizes the importance of properly crediting all content sourced from other sites, aligning with ethical standards of attribution.",
            "option3": "A team member proposes deliberately using misleading tactics to attract attention, believing it’s acceptable as long as it garners more views.",
            "option4": "When discussing feedback on content, a team member suggests that any criticism should be met with aggression and hostility to assert dominance.",
            "correct_answer": "option1"
          },
          {
            "que_id": 5,
            "que": "A student is working on a research project and needs to verify the accuracy of information found online. They are consulting various websites for fact-checking and verification. Based on the scenario, which option represents a website that the student should not use for fact-checking and verifying information?",
            "option1": "The student should visit FactCheck.org",
            "option2": "The student should check Snopes.com",
            "option3": "The student should explore StopFake.org",
            "option4": "The student should check AnyoneSwap.com",
            "correct_answer": "option4"
          },
          {
            "que_id": 6,
            "que": "You come across a news article on social media claiming that a newly discovered fruit has the ability to cure all known illnesses. The article includes impressive testimonials from people who supposedly experienced miraculous recoveries after consuming this fruit. The post has been shared widely, and many people are expressing excitement and hope about the potential health benefits. What should be your initial response to the news article?",
            "option1": "Share the article with your friends and family to spread the potentially life-changing information.",
            "option2": "Like the article and comment on how amazing it is without further investigation.",
            "option3": "Take the information at face value and start consuming the newly discovered fruit as a preventive measure.",
            "option4": "Verify the information from reliable sources before accepting and sharing it.",
            "correct_answer": "option4"
          },
          {
            "que_id": 7,
            "que": "You receive a video on a social media platform showing a public figure delivering a speech that appears to be highly controversial. The content of the speech is alarming, and it could have significant consequences if true. However, you begin to doubt the authenticity of the video due to some noticeable features. Which of the following characteristics is considered a sign of a cheap fake, rather than a sophisticated deep fake?",
            "option1": "The video has seamless lip synchronization, making it difficult to detect any discrepancies between the audio and visual elements.",
            "option2": "There are visible artifacts, distortions, or inconsistencies in the facial expressions and movements of the public figure.",
            "option3": "The background of the video is realistic and matches the usual settings where the public figure is known to appear.",
            "option4": "The video is shared by a reputable news organization, increasing its credibility and authenticity.",
            "correct_answer": "option2"
          },
          {
            "que_id": 8,
            "que": "You come across a video circulating on social media depicting a well-known politician participating in an interview where they make controversial statements. The video seems authentic at first glance, but you start to question its legitimacy due to a specific characteristic. What could be a potential indicator that the video is a deep fake rather than a genuine recording of the politician?",
            "option1": "The video has high-quality production values, with clear audio and professional editing.",
            "option2": "The politician's statements are consistent with their known public positions and beliefs.",
            "option3": "There are subtle but noticeable discrepancies in the synchronization of lip movements and speech.",
            "option4": "The video is shared by multiple reputable news outlets, increasing its credibility.",
            "correct_answer": "option3"
          },
          {
            "que_id": 9,
            "que": "You come across a news article shared on a social media platform claiming that a popular beverage company has just recalled all its products due to dangerous chemical contamination. The article includes alarming details and quotes from purported company officials expressing concern for public safety. The post has been widely shared, and many people are expressing panic and urging others to stop consuming the company's products. What is the most appropriate initial step to take when faced with this news article?",
            "option1": "Share the article immediately to inform your friends and family about the potential danger.",
            "option2": "React with an emotional emoji (like 'shocked' or 'angry') to express your concern.",
            "option3": "Ignore the article, assuming that such news is likely true considering the number of shares it has received.",
            "option4": "Verify the information by checking the credibility of the news source and cross-referencing it with official statements from the beverage company.",
            "correct_answer": "option4"
          },
          {
            "que_id": 10,
            "que": "In the weeks leading up to a highly anticipated election, various online platforms are flooded with information about the candidates. You come across a social media post that claims one of the candidates has been involved in a major scandal, with leaked documents and compromising photos circulating widely. The post is designed to damage the candidate's reputation, and it's shared by numerous accounts. What should be your immediate response to the social media post about the candidate's alleged scandal?",
            "option1": "Investigate the credibility of the information, cross-referencing it with reliable news sources before drawing any conclusions.",
            "option2": "Share the post to ensure others are aware of the potential scandal involving the candidate.",
            "option3": "Like the post and comment on your shock and disappointment, expressing concern about the candidate's actions.",
            "option4": "Ignore the post, assuming it's just another form of political mudslinging common during election campaigns.",
            "correct_answer": "option1"
          },
          {
            "que_id": 11,
            "que": "In a small town, a local newspaper published a front-page article about a recent community event. However, a group of individuals with a specific agenda took a photo from the event and manipulated it to create a misleading image that was then circulated widely on social media. The manipulated image misrepresents the event's true nature and is used to promote a particular narrative. What is the primary ethical concern regarding the manipulation of this photo?",
            "option1": "The manipulated photo undermines the credibility and integrity of the local newspaper’s original reporting.",
            "option2": "The manipulated photo generates excitement and engagement among the community regarding the event.",
            "option3": "The manipulated photo reflects the diversity of opinions and perspectives within the town.",
            "option4": "The manipulated photo provides an opportunity for the community to engage in a constructive debate about the event.",
            "correct_answer": "option1"
          },
          {
            "que_id": 12,
            "que": "You come across a video on a news website discussing a groundbreaking scientific discovery. The video features interviews with scientists and includes data and evidence supporting the discovery. However, you notice that the video does not include any references or links to the original research papers or studies. What should be your approach to evaluating the credibility of the scientific discovery presented in the video?",
            "option1": "Accept the discovery as true based on the video’s presentation and the authority of the featured scientists.",
            "option2": "Review the video’s content critically and seek out the original research papers or studies mentioned to verify the claims made.",
            "option3": "Share the video with others to spread awareness of the groundbreaking discovery without further investigation.",
            "option4": "Assume the discovery is false due to the lack of references in the video.",
            "correct_answer": "option2"
          },
          {
            "que_id": 13,
            "que": "A prominent health influencer shares a post claiming that a particular herbal supplement can cure chronic diseases and has been clinically proven to be highly effective. The post includes testimonials from individuals who have supposedly experienced miraculous recoveries but lacks scientific evidence or references to clinical trials. How should you approach this post to determine its credibility?",
            "option1": "Trust the influencer's claims and consider purchasing the herbal supplement based on the testimonials provided.",
            "option2": "Verify the claims by looking for scientific evidence, such as peer-reviewed studies or clinical trial results, before making any judgments.",
            "option3": "Share the post with others to raise awareness about the herbal supplement’s supposed benefits.",
            "option4": "Ignore the post, assuming it is likely a marketing gimmick without further consideration.",
            "correct_answer": "option2"
          },
          {
            "que_id": 14,
            "que": "During a debate on social media about a controversial public policy, one user presents a series of statistics and claims that the policy will have catastrophic consequences. Another user challenges these claims by presenting counter-evidence and questioning the methodology used in the statistics. Which of the following actions best demonstrates critical thinking and responsible evaluation of the presented information?",
            "option1": "Agree with the user who presented the initial statistics without questioning the methodology or seeking additional evidence.",
            "option2": "Dismiss the counter-evidence presented by the second user and continue to support the initial claims without further investigation.",
            "option3": "Evaluate both the initial claims and the counter-evidence by examining the methodology and seeking additional reliable sources to form a well-informed opinion.",
            "option4": "Focus solely on the emotional impact of the statistics and ignore the counter-evidence presented by the second user.",
            "correct_answer": "option3"
          },
          {
            "que_id": 15,
            "que": "In the context of online privacy, you are considering using a new app that requires access to your contacts and location data. The app promises enhanced features and a personalized experience in exchange for this access. What is the most appropriate action to ensure your privacy while using the app?",
            "option1": "Grant the app access to all requested data without concern, as it is necessary for the app's functionality.",
            "option2": "Review the app's privacy policy and terms of service to understand how your data will be used and decide whether you are comfortable with the terms.",
            "option3": "Ignore the app's data access requests and continue using the app without granting any permissions.",
            "option4": "Uninstall the app immediately, assuming it poses a privacy risk without further investigation.",
            "correct_answer": "option2"
          }
        // Add remaining questions similarly
      ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  // Handle option selection
  const handleOptionClick = (option) => {
    if (isAnswered) return; // Prevent multiple selections
    setSelectedOption(option);
  };

  // Evaluate the answer when the user clicks "Next"
  const nextQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];

    if (!isAnswered) {
      if (selectedOption === currentQuestion.correct_answer) {
        setScore((prevScore) => prevScore + 1);
      }
      setIsAnswered(true);
    } else {
      // Move to the next question
      setIsAnswered(false);
      setSelectedOption('');

      if (currentQuestionIndex + 1 < questions.length) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      } else {
        // If no more questions, check score and redirect
        if (score >= 10) {
          navigate('/passed');
        } else {
          navigate('/failed');
        }
      }
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="questionsheet">
      <h2>Question {currentQuestionIndex + 1}</h2>
      <p>{currentQuestion.que}</p>

      <div className="options">
        {['option1', 'option2', 'option3', 'option4'].map((optionKey) => (
        <button
        key={optionKey}
        onClick={() => handleOptionClick(optionKey)}
        className={`option-button ${
          selectedOption === optionKey ? 'selected' : ''
        } ${
          isAnswered && optionKey === selectedOption
            ? ''
            : ''
        }`}
      >
      
            {currentQuestion[optionKey]}
          </button>
        ))}
      </div>

      <button onClick={nextQuestion} className="next-button">
        {isAnswered ? 'Next' : 'Submit'}
      </button>
    </div>
  );
};

export default Questionsheet;
