import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/common/header/Header';
import Main from './components/main/Main';
import Footer from './components/common/footer/Footer';
import Video from './components/main/HomeVideo';
import { HeaderSpacer } from './assets/styles/common/header.styled';
import Contact from './components/contactUs/Contact';
import React, { useEffect, useState } from 'react';
import InquiryModal from './components/contactUs/InquiryModal';
import BlankPage from './components/common/blankPage/BlankPage';
import UpButton from './components/common/button/UpButton';
import PortfolioListModal from './components/common/modal/portfolioList/PortfolioListModal';
// import Loading from './components/common/loading/Loading';

// Vr/Ar
import MudFlat from './components/portfolio/vrAr/01/MudFlat';
import EcosystemRestoration from './components/portfolio/vrAr/02/EcosystemRestoration';
import EarthRotationChangingSeasons from './components/portfolio/vrAr/03/EarthRotationChangingSeasons';
import Contour from './components/portfolio/vrAr/04/Contour';
import BongsuPaval from './components/portfolio/vrAr/05/BongsuPaval';
import ExploreDokdo from './components/portfolio/vrAr/06/ExploreDokdo';
import ForensicScientist from './components/portfolio/vrAr/07/ForensicScientist';
import ExploreFreiburg from './components/portfolio/vrAr/08/ExploreFreiburg';
import TyphoonEvacuation from './components/portfolio/vrAr/09/TyphoonEvacuation';
import FrenchClimateLifestyle from './components/portfolio/vrAr/10/FrenchClimateLifestyle';
import Mayor from './components/portfolio/vrAr/11/Mayor';
import WaterTemperatureSalinityExploration from './components/portfolio/vrAr/12/WaterTemperatureSalinityExploration';
import Bimetal from './components/portfolio/vrAr/13/Bimetal';
import StarsCharacteristics from './components/portfolio/vrAr/14/StarsCharacteristics';
import CivilTrial from './components/portfolio/vrAr/15/CivilTrial';
import BuildingGreatCity from './components/portfolio/vrAr/16/BuildingGreatCity';
import BoneJointMuscle from './components/portfolio/vrAr/17/BoneJointMuscle';
import MapExpert from './components/portfolio/vrAr/18/MapExpert';
import SurvivalBag from './components/portfolio/vrAr/19/SurvivalBag';
import KoreanWar from './components/portfolio/vrAr/20/KoreanWar';
// e-Learning
import ReservoirDam from './components/portfolio/eLearning/01/ReservoirDam';
import ClassroomRevolution from './components/portfolio/eLearning/02/ClassroomRevolution';
import CyberSocializingOne from './components/portfolio/eLearning/03/CyberSocializingOne';
import CyberSocializingTwo from './components/portfolio/eLearning/04/CyberSocializingTwo';
import InformationDisclosure from './components/portfolio/eLearning/05/InformationDisclosure';
import ChemicalSafety from './components/portfolio/eLearning/06/ChemicalSafety';
import EastAsia from './components/portfolio/eLearning/07/EastAsia';
import ParentingGuide from './components/portfolio/eLearning/08/ParentingGuide';
// R&D
import EnvironmentalLabelingCertification from './components/portfolio/RnD/01/EnvironmentalLabelingCertification';
import ClassroomRevolutionLessonPlans from './components/portfolio/RnD/02/ClassroomRevolutionLessonPlans';

import PortfolioListButton from './components/common/button/PortfolioListButton';

// import ScrollToTop from './components/common/scrollTop/ScrollTop';
import ScrollToTopOrRestore from './components/common/scrollTop/ScrollToTopOrRestore';

import PortfolioList from './components/portfolio/common/PortfolioList';
import WordBuildingGame from './components/portfolio/Interaction/01/WordBuildingGame';
import SnakeLogGame from './components/portfolio/Interaction/02/SnakeLogGame';
import { config } from './config';
import SentenceTravelGame from './components/portfolio/Interaction/03/SentenceTravelGame';
import HighHighUpToThe9thFloor from './components/portfolio/Interaction/04/HighHighUpToThe9thFloor';
import WhoIsTheFastest from './components/portfolio/Interaction/05/WhoIsTheFastest';
import ShapeDomino from './components/portfolio/Interaction/06/ShapeDomino';
import BingoBingo from './components/portfolio/Interaction/07/BingoBingo';
import SurfaceTreatmentIndustryTextBook from './components/portfolio/RnD/03/SurfaceTreatmentIndustryTextBook';

function App() {
  const location = useLocation();

  const [modalStatus, setModalStatus] = useState(false);
  const [portfolioListModalStatus, setPortfolioListModalStatus] = useState(false);

  const [isDesktopScreen, setIsDesktopScreen] = useState(window.matchMedia('(min-width: 1025px)').matches);

  const [headerClass, setHeaderClass] = useState('transparent');
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const pageName = location.pathname.split('/');

    if (pageName[1] === '') {
      setActiveLink('');
      if (location.hash === '#about') {
        document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
      } else if (location.hash === '#business') {
        document.querySelector('#business').scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo(0, 0);
      }
    } else if (pageName[1] === 'about') {
      setActiveLink('about');
    } else if (pageName[1] === 'business') {
      setActiveLink('business');
    } else if (pageName[1] === 'portfolio') {
      setActiveLink('portfolio');
    } else if (pageName[1] === 'contactUs') {
      setActiveLink('contactUs');
    }

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHeaderClass('colored');
      } else {
        setHeaderClass('transparent');
      }
    };
    const handleResize = () => {
      setIsDesktopScreen(window.matchMedia('(min-width: 1025px)').matches);
    };
    window.addEventListener('resize', handleResize);
    if (location.pathname === '/') {
      setHeaderClass('');
      window.addEventListener('scroll', handleScroll);
    } else {
      setHeaderClass('colored');
    }
    // 로딩 완료 후 로딩 상태를 비활성화합니다.
    // const handleLoad = () => {
    //   setIsLoading(false);
    // };
    // const timer = setTimeout(handleLoad, 500);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      // clearTimeout(timer); // clean-up function
    };
  }, [location]);

  // 이중스크롤 막기
  useEffect(() => {
    if (portfolioListModalStatus || modalStatus) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      // console.log('닫힘');
    }
  }, [portfolioListModalStatus, modalStatus]);

  return (
    <div className="App">
      {/* {isLoading ? <Loading /> : <></>} */}

      <ScrollToTopOrRestore />
      {/* {scrollStatus === false && <ScrollToTopOrRestore />} */}

      {/* 모달 */}
      {modalStatus && <InquiryModal setModalStatus={setModalStatus} />}
      {portfolioListModalStatus && <PortfolioListModal setPortfolioListModalStatus={setPortfolioListModalStatus} />}
      {/* PC해상도&홈화면일때 */}
      {isDesktopScreen === true && location.pathname === '/' ? '' : <HeaderSpacer />}
      <Header
        headerClass={headerClass}
        activeLink={activeLink}
        setActiveLink={setActiveLink}
        portfolioListModalStatus={portfolioListModalStatus}
        setPortfolioListModalStatus={setPortfolioListModalStatus}
      />
      {location.pathname === '/' ? <Video /> : ''}

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/portfolio/VrAr" element={<PortfolioList />} />
        <Route path="/portfolio/e-Learning" element={<PortfolioList />} />
        <Route path="/portfolio/R&D" element={<PortfolioList />} />
        <Route path="/portfolio/InteractionGame" element={<PortfolioList />} />

        {/* <Route path="/portfolio/VrAr" element={<VrArPortfolioList />} />
        <Route path="/portfolio/e-Learning" element={<ELearningPortfolioList />} />
        <Route path="/portfolio/R&D" element={<RnDPortfolioList />} /> */}

        {/* vr/ar */}
        {/* <Route path="/portfolio/VrAr/:id" element={<VrAr />} /> */}
        <Route path="/portfolio/VrAr/AR I 갯벌은 어떤 곳일까?" element={<MudFlat />} />
        <Route path="/portfolio/VrAr/AR I 미션! 생태계를 복원하라" element={<EcosystemRestoration />} />
        <Route path="/portfolio/VrAr/AR I 지구의 공전과 계절의 변화" element={<EarthRotationChangingSeasons />} />
        <Route path="/portfolio/VrAr/AR I 땅의 높낮이를 나타내는 등고선" element={<Contour />} />
        <Route path="/portfolio/VrAr/AR I 옛 사람들의 통신수단, 봉수제도와 파발제도" element={<BongsuPaval />} />
        <Route path="/portfolio/VrAr/VR I 우리 땅, 독도 탐험하기" element={<ExploreDokdo />} />
        <Route path="/portfolio/VrAr/VR I 과학수사요원이 되어 범인을 찾아라!" element={<ForensicScientist />} />
        <Route path="/portfolio/VrAr/VR I 세계의 환경 수도 프라이부르크 구경하기" element={<ExploreFreiburg />} />
        <Route path="/portfolio/VrAr/VR I 태풍 대피요령 알아보기" element={<TyphoonEvacuation />} />
        <Route path="/portfolio/VrAr/VR I 모네의 작품으로 알아보는 프랑스 기후와 주민생활" element={<FrenchClimateLifestyle />} />
        <Route path="/portfolio/VrAr/VR I 직접 만드는 민주적인 선거! 시장 출마하기" element={<Mayor />} />
        <Route path="/portfolio/VrAr/VR I 바닷속 생물 채집과 수온, 염분 탐사" element={<WaterTemperatureSalinityExploration />} />
        <Route path="/portfolio/VrAr/AR I 열팽창 활용하여 바이메탈 만들기" element={<Bimetal />} />
        <Route path="/portfolio/VrAr/AR I 별의 색과 밝기를 이용한 별의 특성 알아보기" element={<StarsCharacteristics />} />
        <Route path="/portfolio/VrAr/AR I 나도 할 수 있다, 민사 재판" element={<CivilTrial />} />
        <Route path="/portfolio/VrAr/AR I 나만의 살기 좋은 도시 만들기" element={<BuildingGreatCity />} />
        <Route path="/portfolio/VrAr/AR I 뼈, 관절, 근육! 우리 몸을 움직이는 세박자" element={<BoneJointMuscle />} />
        <Route path="/portfolio/VrAr/AR I 지도를 볼 줄 아는, 나는 지도박사" element={<MapExpert />} />
        <Route path="/portfolio/VrAr/VR I 나만의 생존가방 준비하기" element={<SurvivalBag />} />
        <Route path="/portfolio/VrAr/VR I 이중섭 작품을 통해 알아보는 6·25 전쟁" element={<KoreanWar />} />

        {/* e-Learning */}
        <Route path="/portfolio/e-Learning/저수지·댐 안전관리 및 재해예방" element={<ReservoirDam />} />
        <Route path="/portfolio/e-Learning/교사가 이끄는 교실혁명" element={<ClassroomRevolution />} />
        <Route path="/portfolio/e-Learning/사이버어울림(기술·가정, 진로와 직업, 한문)" element={<CyberSocializingOne />} />
        <Route path="/portfolio/e-Learning/사이버어울림(영어, 체육)" element={<CyberSocializingTwo />} />
        <Route path="/portfolio/e-Learning/정보공시 입력 지침 안내와 시스템매뉴얼" element={<InformationDisclosure />} />
        <Route path="/portfolio/e-Learning/화학물질안전에 대하여" element={<ChemicalSafety />} />
        <Route path="/portfolio/e-Learning/처음 만나는 동아시아사" element={<EastAsia />} />
        <Route path="/portfolio/e-Learning/위탁모를 위한 양육 길잡이" element={<ParentingGuide />} />

        {/* R&D */}
        {/* <Route path="/portfolio/R&D/:id" element={<></>} /> */}
        <Route path="/portfolio/R&D/친환경 소비의 첫걸음, 환경표지인증을 통한 더 나은 선택" element={<EnvironmentalLabelingCertification />} />
        <Route path="/portfolio/R&D/교실혁명 강의교안" element={<ClassroomRevolutionLessonPlans />} />
        <Route path={`/portfolio/R&D/${config.rnd3}`} element={<SurfaceTreatmentIndustryTextBook />} />

        {/* InteractionGame */}
        <Route path={`/portfolio/InteractionGame/${config.interactionGame1}`} element={<WordBuildingGame />} />
        <Route path={`/portfolio/InteractionGame/${config.interactionGame2}`} element={<SnakeLogGame />} />
        <Route path={`/portfolio/InteractionGame/${config.interactionGame3}`} element={<SentenceTravelGame />} />
        <Route path={`/portfolio/InteractionGame/${config.interactionGame4}`} element={<HighHighUpToThe9thFloor />} />
        <Route path={`/portfolio/InteractionGame/${config.interactionGame5}`} element={<WhoIsTheFastest />} />
        <Route path={`/portfolio/InteractionGame/${config.interactionGame6}`} element={<ShapeDomino />} />
        <Route path={`/portfolio/InteractionGame/${config.interactionGame7}`} element={<BingoBingo />} />

        <Route path="/contactUs" element={<Contact modalStatus={modalStatus} setModalStatus={setModalStatus} />} />

        <Route path="*" element={<BlankPage />} />
      </Routes>

      {activeLink === 'portfolio' && (
        <PortfolioListButton portfolioListModalStatus={portfolioListModalStatus} setPortfolioListModalStatus={setPortfolioListModalStatus} />
      )}

      <UpButton />
      <Footer />
    </div>
  );
}

export default App;
