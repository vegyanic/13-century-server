import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../product.module.css';
import Header from './head';
import WhatsAppButton from './wpbtn';
import ImageZoom from './ImageZoom';

const Producteyef = () => {
    const { model } = useParams();

    // Example colorCodes object mapping models to their color codes
    const colorCodes = {
        '1013':['C1','C2','C3'],
        '1027':['C1','C2','C3','C4'],
        '1029':['C1','C2','C3','C4','C5'],
        '1032':['C1','C2','C3','C4','C5'],
        '2205':['C3','C5','C6','C10'],
        '2256':['C1','C2','C4'],
        '2501':['C1','C5','C7','C8'],
        '3011':['C1','C3','C4','C6'],
        '3127':['CGRN','CTSP'],
        '5848':['C1','C3','C4','C7'],
        '6013':['C1','C4','C5','C6','C7'],
        '6016':['C1','C2','C3','C5'],
        '8273':['C1','C2','C3','C4'],
        '8868':['C1','C2','C3'],
    };

    const frameSize = {
        '1013':'52-21-145',
        '1027':'51-18-140',
        '1029':'48-21-145',
        '1032':'48-21-145',
        '2205':'51-19-148',
        '2256':'53-20-148',
        '2501':'54-20-148',
        '3011':'54-17-145',
        '3127':'52-19-148',
        '5848':'54-18-143',
        '6013':'54-17-140',
        '6016':'55-17-140',
        '8273':'53-17-139',
        '8868':'53-17-138',
    };

    const genderId = {
       '1013':'FEMALE',
        '1027':'FEMALE',
        '1029':'FEMALE',
        '1032':'FEMALE',
        '2205':'FEMALE',
        '2256':'FEMALE',
        '2501':'FEMALE',
        '3011':'FEMALE',
        '3127':'FEMALE',
        '5848':'FEMALE',
        '6013':'FEMALE',
        '6016':'FEMALE',
        '8273':'FEMALE',
        '8868':'FEMALE',
    };

    const [mainImage, setMainImage] = useState(`https://13-century.com/files/women/${model}/${colorCodes[model]?.[0]}.png`);
    const [selectedColor, setSelectedColor] = useState(colorCodes[model]?.[0] || '');
    // eslint-disable-next-line no-unused-vars
    const [indiFrame, setFrameSize] = useState(frameSize[model] || '');
    // eslint-disable-next-line no-unused-vars
    const [gdId, setGdid] = useState(genderId[model] || '');
    // eslint-disable-next-line no-unused-vars
    const [productInfoTop, setProductInfoTop] = useState('150px');
    // eslint-disable-next-line no-unused-vars
    const [imgMaxHeight, setImgMaxHeight] = useState('');
    // eslint-disable-next-line no-unused-vars
    const selectedModel = {model}; // Replace with your dynamic model
    // eslint-disable-next-line no-use-before-define, no-unused-vars
    const selectedColorCode = {colorCodes}; // Replace with your dynamic color code

        

    useEffect(() => {
        const updatePdcClass = () => {
            const pdcElements = document.querySelectorAll('#pdc');
            if (window.innerWidth < 575) {
                pdcElements.forEach((element) => {
                    element.classList.add('col-11');
                    element.classList.remove('col');
                    element.classList.add('ms-3');
                    element.classList.remove('ms-5');
                    element.style.height = '200px'
                });
            } else {
                pdcElements.forEach((element) => {
                    element.classList.remove('col-11');
                    element.classList.add('col');
                    element.classList.remove("ms-3");
                    element.classList.add('ms-5');
                    element.style.height = ''
                });
            }
        };
        const updateStyles = () => {
            const pdcElements = document.querySelectorAll('.product-item-info');

            if (window.innerWidth < 575) {
                setProductInfoTop('20px');
                pdcElements.forEach((element) => {
                    element.style.maxHeight = '240px';
                    element.style.top = '20px'
                });
            } else {
                setProductInfoTop('150px');
                pdcElements.forEach((element) => {
                    element.style.maxHeight = ''; // Reset to normal height
                    element.style.top = '150px'
                });
            }
        };
        const updateImgStyles = () => {
            const pdcElements = document.querySelectorAll('#pd-image');
            if (window.innerWidth < 575) {
                pdcElements.forEach((element) => {
                    element.style.padding = '40px 0px 0px 0px';
                });
            } else {
                pdcElements.forEach((element) => {
                    element.style.padding = '220px 0px 0px 0px'
                })
            }
        }
        const updateColStyle = () => {
            const pdcElements = document.querySelectorAll('.product-item-pdc',);
            if (window.innerWidth < 575) {
                pdcElements.forEach((element) => {
                    element.style.height = '600px';
                });
            } else {
                pdcElements.forEach((element) => {
                    element.style.height = ''
                })
            }
        }
        const updateCStyle = () => {
            const pdcElements = document.querySelectorAll('#pdcx',);
            if (window.innerWidth < 575) {
                pdcElements.forEach((element) => {
                    element.style.padding= 'px 0px 0px 200px';
                });
            } else {
                pdcElements.forEach((element) => {
                    element.style.height = ''
                })
            }
        }
        

        updateStyles();
        window.addEventListener('resize', updateStyles);
        updateImgStyles();
        window.addEventListener('resize', updateImgStyles);

        updatePdcClass();
        window.addEventListener('resize', updatePdcClass);
        
        updateColStyle();
        window.addEventListener('resize',updateColStyle);
        updateCStyle();
        window.addEventListener('resize',updateCStyle);

        return () => {
            window.removeEventListener('resize', updatePdcClass);
            window.removeEventListener('resize', updateStyles);

        };
    }, []);

    const handleImageClick = (colorCode) => {
        const imageUrl = `https://13-century.com/files/women/${model}/${colorCode}.png`;
        setMainImage(imageUrl);
        setSelectedColor(colorCode);
    };

    return (
        <main>
            <Header />
            <div className="product-item-pdc d-flex flex-row flex-wrap flex-md-nowrap" style={{height:'1400px'}} >
                <div id="pdc" className="col ms-5">
                    <ImageZoom id="pd-image" className="img-fluid" src={mainImage}  alt={model} />
                </div>
                <div id="pdcx" className="col">
                    <div className="product-item-info position-relative" >
                        <div className="product-title text">
                            <div className="d-grid justify-content-center text">
                                <h2>Model number</h2>
                                <h3 style={{ justifySelf: 'center' }}>{model}</h3>
                            </div>
                            <div className='text' style={{ width: 'max-content' }}>
                                <h6>Gender <span><p className='text'>{gdId}</p></span></h6>
                            </div>
                            
                            <h6>Frame Measurement <span><p className='text'>{indiFrame}</p></span></h6>
                            
                            <div className="option-group container-fluid">
                                <h6 className='text'>Color <span><p className='text'>{selectedColor}</p></span></h6>
                                <div className="row row-cols-3 g-3">
                                    {colorCodes[model]?.map((colorCode) => (
                                        <div className="col" key={colorCode} style={{minWidth: '33%'}}>
                                            <div className="card" onClick={() => handleImageClick(colorCode)} style={{minWidth: '33%'}}>
                                                <img className="img-thumbnail img-fluid" src={`https://13-century.com/files/women/${model}/${colorCode}.png`} alt="Color option" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <WhatsAppButton/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Producteyef;
