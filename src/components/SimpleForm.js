import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import Get from "./Get";


const config ={
  width: "270px",
  height: "400px",
  floating: true,
};

const theme = {
  background: '#f5f8fb',
  fontFamily: 'Arial',
  headerBgColor: '#EF6C00',
  headerFontColor: '#fff',
  headerFontSize: '14px',
  botBubbleColor: '#EF6C00',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
  userFontSize: '10px',
};

class SimpleForm extends Component {
  render() {
    return (
      <div>
        <ThemeProvider theme={theme}>
        <ChatBot steps={[
          {
            id:'intro', 
            message:'Hello, I am Bot Taco! What is your name?',
            trigger:'2'
          },
          {
            id: '2',
            user: true,
            validator: (value) => {
              if (/^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*/.test(value))
                {
                  return true;
                }
              else
                {
                  return'Please input alphabet characters only.';
                }
              },
            trigger: '3',
          },
          {
            id: '3',
            message: 'Hi {previousValue}, nice to meet you! Please click on the buttons to find out more!',
          trigger:'intro-next'},
          {
            id:'intro-next', 
            options:[
              {value:'Location', label:'Location', trigger:'location'},
              {value:'Disclaimer', label:'Disclaimer', trigger:'disclaimer'},
              {value:'Services', label:'Services', trigger:'services'},
              {value:'Costs', label:'Costs', trigger:'costs'},
              {value:'Feedback', label:'Feedback', trigger:'feedback'},
            ] 
           },
           {
            id:'location', 
            message:'Pasir Ris, to find out more head over to our FAQ at the top',
           trigger:'3'
          },
         {
          id:'disclaimer', 
          message:'If you have the time, please head over and read it!', 
          trigger:'3'
         },
         {
          id:'services', 
          message:'We offer your dogs only the best! Head over to offerings to find out more', 
          trigger:'3'
         },
         {
          id:'costs', 
          message:'15 for small, 40 for big! All other details in FAQ', 
          trigger:'3'
         },
         {
          id:'feedback', 
          
          component:<Get/>,
          end:true    
         },
        ]}
      
        {...config}
      />
</ThemeProvider>
      </div>
    );
  };
       
};

export default SimpleForm;

