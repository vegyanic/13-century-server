import React from 'react';
import { useParams } from 'react-router-dom';

const WhatsAppButton = () => {
  const { model } = useParams();

  const colorCode = {
    '1014': ['C1', 'C2', 'C3'],
    '1024': ['C1', 'C2', 'C3'],
    '1025': ['C1', 'C2', 'C3'],
    '1028': ['C1', 'C2', 'C3', 'C4'],
    '1030': ['C1', 'C2', 'C3', 'C4', 'C5'],
    '1031': ['C1', 'C2', 'C3', 'C4', 'C5'],
    '1033': ['C1', 'C2', 'C3', 'C4', 'C5'],
    '5024': ['C1', 'C2', 'C4', 'C5'],
    '6022': ['C1', 'C3', 'C4', 'C5'],
    '7106': ['C1', 'C3', 'C5'],
    '8617': ['C3', 'C4', 'C5'],
    '8620': ['C2', 'C3', 'C4', 'C5'],
    '10004': ['C1', 'C3', 'C4', 'C5'],
    '10006': ['C1', 'C3', 'C4', 'C5'],
    '10007': ['C1', 'C3', 'C4', 'C5'],
    '10010': ['C1', 'C3', 'C4', 'C5'],
    '1013': ['C1', 'C2', 'C3'],
    '1027': ['C1', 'C2', 'C3', 'C4'],
    '1029': ['C1', 'C2', 'C3', 'C4', 'C5'],
    '1032': ['C1', 'C2', 'C3', 'C4', 'C5'],
    '2205': ['C3', 'C5', 'C6', 'C10'],
    '2256': ['C1', 'C2', 'C4'],
    '2501': ['C1', 'C5', 'C7', 'C8'],
    '3011': ['C1', 'C3', 'C4', 'C6'],
    '3127': ['CGRN', 'CTSP'],
    '5848': ['C1', 'C3', 'C4', 'C7'],
    '6013': ['C1', 'C4', 'C5', 'C6', 'C7'],
    '6016': ['C1', 'C2', 'C3', 'C5'],
    '8273': ['C1', 'C2', 'C3', 'C4'],
    '8868': ['C1', 'C2', 'C3'],
    '2170': ['C54', 'C56', 'C106'],
    '2002': ['C1', 'C5'],
    '6337': ['C1', 'C2', 'C35', 'C36'],
    '6351': ['C1', 'C2', 'C8'],
    '7005': ['C1', 'C10', 'C15'],
    '7436': ['C3', 'C4', 'C5'],
    '7479': ['C1', 'C2', 'C4', 'C9'],
    '8816': ['C1', 'C4', 'C5'],
    '0759': ['C1', 'C2', 'C3', 'C4'],
    '2002M': ['C1', 'C5'],
    '2155': ['C2', 'C4', 'C5'],
    '2370': ['C1', 'C2', 'C3', 'C5', 'C6'],
    '6324': ['C37', 'C93'],
    '6334': ['C1', 'C3', 'C4'],
    '6608': ['C1', 'C3', 'C4', 'C6'],
    '8070': ['C2', 'C3'],
    '9833': ['C1', 'C4', 'C5', 'C6'],
    '9834': ['C1', 'C2', 'C5', 'C6'],
    '29035': ['C3', 'C4', 'C6'],
  };

  const phoneNumber = '7000399584'; // Replace with your WhatsApp number

  // Get the color codes for the selected model
  const selectedColors = colorCode[model];

  // Convert the array of color codes to a string
  const colorString = selectedColors ? selectedColors.join(', ') : 'no available colors';

  // Encode the message
  const message = `Hey I want ${model} model in color code ${colorString}.`;
  const encodedMessage = encodeURIComponent(message);

  // Generate the WhatsApp URL
  const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a  href={url} target="_blank" rel="noopener noreferrer" style={{top: '20px'}}>
      <button className="btn btn-outline-dark btn-lg mt-5 " style={{marginLeft: '120px'}}>
        Get Now
      </button>
    </a>
  );
};

export default WhatsAppButton;
