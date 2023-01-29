import React from 'react';
import img_1 from "../../assets/img_1.png";
import img_5 from "../../assets/img_5.png";
import img_6 from "../../assets/img_6.png";

import "./projects.css";


const Projects = () => {
    return (

        <section className="project section" id="about">
            <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle">My Creative Projects</span>

            <div className="project__container container grid">
    
    
                <div className="project__box">
                    <img src={img_1} alt="" />
                    <h3 className="project__title">Optical Character Recognition</h3>
                    <div className="project_made">
                        <h4 className="project__subtitle">Made with
                        </h4>
                        
                    </div>
                    <span className="project__subtitle">
                        I created an Optical Character Recognition (OCR) 
                        website that used Python for the backend and React 
                        for the frontend. The website utilized OCR technology 
                        to convert scanned documents, images, and other types 
                        of documents into editable and searchable text. I used 
                        Python libraries such as Tesseract or pytesseract to 
                        handle the OCR processing, while React handled the 
                        user interface and user interactions. Overall, my 
                        project aimed to make it easy for users to extract 
                        text from images, making it more convenient to edit, 
                        search or analyze the extracted text.
                    </span>
                </div>

                <div className="project__box">
                    <img src={img_5} alt="" />
                    <h3 className="project__title">Optical Character Recognition</h3>
                    <div className="project_made">
                        <h4 className="project__subtitle">Made with
                        </h4>
                        
                    </div>
                    <span className="project__subtitle">
                        I created an Optical Character Recognition (OCR) 
                        website that used Python for the backend and React 
                        for the frontend. The website utilized OCR technology 
                        to convert scanned documents, images, and other types 
                        of documents into editable and searchable text. I used 
                        Python libraries such as Tesseract or pytesseract to 
                        handle the OCR processing, while React handled the 
                        user interface and user interactions. Overall, my 
                        project aimed to make it easy for users to extract 
                        text from images, making it more convenient to edit, 
                        search or analyze the extracted text.
                    </span>
                </div>

                <div className="project__box">
                    <img src={img_6} alt="" />
                    <h3 className="project__title">Optical Character Recognition</h3>
                    <div className="project_made">
                        <h4 className="project__subtitle">Made with
                        </h4>
                        
                    </div>
                    <span className="project__subtitle">
                        I created an Optical Character Recognition (OCR) 
                        website that used Python for the backend and React 
                        for the frontend. The website utilized OCR technology 
                        to convert scanned documents, images, and other types 
                        of documents into editable and searchable text. I used 
                        Python libraries such as Tesseract or pytesseract to 
                        handle the OCR processing, while React handled the 
                        user interface and user interactions. Overall, my 
                        project aimed to make it easy for users to extract 
                        text from images, making it more convenient to edit, 
                        search or analyze the extracted text.
                    </span>
                </div>
        </div>
        </section>
      )
    }

export default Projects