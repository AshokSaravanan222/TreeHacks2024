import React, {useState} from 'react'
import { View, StyleSheet} from 'react-native'
import { Text, Button, Input} from '@rneui/themed'
import { useLocalSearchParams, useRouter } from 'expo-router'

import Heading from '../../components/heading/Heading'
import Comment from '../../components/comment/Comment'
import EnhancedInput from '../../components/enhancedinput/EnhancedInput'
import NextButton from '../../components/nextbutton/NextButton'

const mentorData = {
    "questions": [
      {
        "message": "We're excited to learn about you!",
        "question": "What experiences are you excited to share?",
        "tip": "Think of a moment that shaped your perspective or a skill that's been crucial to your success."
      },
      {
        "message": "Your wisdom is a gift!",
        "question": "What's a key skill you'd like to teach?",
        "tip": "Identify a skill you're passionate about and explain why it's important."
      },
      {
        "message": "Show us who you are in a nutshell!",
        "question": "How would you describe yourself in three words?",
        "tip": "Select words that reflect your core values or strengths."
      },
      {
        "message": "Imagine the possibilities!",
        "question": "Is there an activity you'd like to try with a mentee?",
        "tip": "Propose an activity that aligns with your interests and could be enjoyable to share."
      },
      {
        "message": "Share the wisdom that guides you.",
        "question": "What's one piece of advice you value?",
        "tip": "Mention advice that has helped you navigate life's challenges."
      }
    ]
  }

  const menteeData = {
    "questions": [
      {
        "message": "Let's tackle it together!",
        "question": "What issue do you hope a mentor will help you resolve?",
        "tip": "I'm hoping to gain clarity on my career path and overcome my indecision between pursuing a career in creative arts or tech."
      },
      {
        "message": "The future is bright!",
        "question": "What career paths or subjects are you curious about?",
        "tip": "I'm fascinated by renewable energy solutions and how technology can combat climate change."
      },
      {
        "message": "Share what lights your fire!",
        "question": "What's a hobby you're passionate about?",
        "tip": "I've always loved astronomy and stargazing, being amazed by the mysteries of the universe."
      },
      {
        "message": "You in a snapshot!",
        "question": "How would your friends describe you in three words?",
        "tip": "Creative, analytical, compassionate."
      },
      {
        "message": "Discovery awaits!",
        "question": "Is there a new skill or hobby you'd like to explore?",
        "tip": "I'm interested in learning about urban gardening and sustainable living practices."
      }
    ]
  }

  const Survey = () => {
    const params = useLocalSearchParams();
    const { role } = params; // either "mentee" or "mentor"
    const router = useRouter();
  
    // Determine the set of questions based on the role
    const questions = role === 'mentor' ? mentorData.questions : menteeData.questions;
  
    // State to track the current question index
    const [currentIndex, setCurrentIndex] = useState(0);
  
    // Increment the current question index or navigate after the last question
    const handleNext = () => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        // All questions have been answered, navigate to another screen
        navigateToCompletionScreen();
      }
    };
  
    // Function to navigate to another screen after completing the survey
    const navigateToCompletionScreen = () => {
      // Example navigation, replace 'CompletionScreen' with your actual destination
      // call API!
      router.push({ pathname: 'tabs/home' });
    };
  
    return (
      <View style={styles.container}>
        <Heading text={questions[currentIndex].message} />
        <Comment text={questions[currentIndex].question} />
        <EnhancedInput tip={questions[currentIndex].tip} />
  
        <NextButton navigateTo={handleNext} />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    // Additional styles can be added here
  });
  
  export default Survey;