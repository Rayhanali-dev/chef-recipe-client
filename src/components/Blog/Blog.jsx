import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ReactPDF from '../ReactPdf/ReactPDF';

const Blog = () => {
    return (
        <div className='max-w-7xl mx-auto mt-16'>
            <PDFDownloadLink document={<ReactPDF />} fileName='blog'>
                {({ loading }) => (loading ? <button >Loading Document...</button> : <button className="btn btn-primary ">Download PDF</button>)}
            </PDFDownloadLink>
            <div className="collapse mb-6 mt-6 collapse-arrow">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    Differences between uncontrolled and controlled components.
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p>
                </div>
            </div>
            <div className="collapse mb-6 collapse-arrow">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    How to validate React props using PropTypes
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>
                        Import the PropTypes library in your component using import PropTypes from 'prop-types'; Then Define the expected data types for your props using the propTypes object inside your component. Specify the data type for each prop using PropTypes, such as PropTypes.string, PropTypes.number, PropTypes.bool, etc. Must be Assign the propTypes object to your component using the MyComponent.propTypes syntax.
                    </p>
                </div>
            </div>
            <div className="collapse mb-6 collapse-arrow">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    Difference between nodejs and express js.?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>NodeJS is an event-driven, non-blocking I/O model using JavaScript as its main language. It helps to build scalable network applications. Express is a minimal and flexible Node. js web application framework that provides a robust set of features for web and mobile applications.</p>
                </div>
            </div>
            <div className="collapse mb-6 collapse-arrow">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    what is a custom hook, and why will you create a custom hook?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;