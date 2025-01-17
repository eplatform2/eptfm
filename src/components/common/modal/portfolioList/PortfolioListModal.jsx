import React from 'react';
import CategoryUl from './CategoryUl';
import Category from './Category';
import CategoryLi from './CategoryLi';
import { StyledPortfolioListModal } from '../../../../assets/styles/common/portfolioListModal/portfolioListModal';
import useResponsiveMax1024 from './../../../hooks/useResponsiveMax1024';
import useLongTablet from '../../../hooks/useTabletMax1556';
import useMobile from '../../../hooks/useMobile';
import { config } from '../../../../config';
import usePc2 from '../../../hooks/usePc2';
// import useTablet from '../../../hooks/useTablet';

const PortfolioListModal = ({ setPortfolioListModalStatus }) => {
  const isMobileTablet = useResponsiveMax1024();
  const isMobile = useMobile();
  // const isTablet = useTablet();
  const isLongTablet = useLongTablet();
  const isPc = usePc2();
  return (
    <StyledPortfolioListModal>
      <div className="modalBackground"></div>
      <div className="modalContainer">
        <div className="titleXbtn">
          <p className="title">PORTFOLIO</p>
          <img
            className="xBtn"
            onClick={() => setPortfolioListModalStatus(false)}
            src={`${process.env.PUBLIC_URL}/assets/images/common/${isMobileTablet ? 'portfolioListXBtn_m' : 'portfolioListXBtn'}.png`}
            alt=""
          />
        </div>
        <div className="gridWrapper">
          {/* INTERACTION GAME */}
          <CategoryUl>
            <Category category={'INTERACTION GAME'} />
            <CategoryLi
              name={config.interactionGame1}
              setPortfolioListModalStatus={setPortfolioListModalStatus}
              link={'/portfolio/InteractionGame/' + config.interactionGame1}
            />
            <CategoryLi
              name={config.interactionGame2}
              setPortfolioListModalStatus={setPortfolioListModalStatus}
              link={'/portfolio/InteractionGame/' + config.interactionGame2}
            />
            {isPc && (
              <>
                <CategoryLi
                  name={config.interactionGame3}
                  setPortfolioListModalStatus={setPortfolioListModalStatus}
                  link={'/portfolio/InteractionGame/' + config.interactionGame3}
                />
                <CategoryLi
                  name={config.interactionGame4}
                  setPortfolioListModalStatus={setPortfolioListModalStatus}
                  link={'/portfolio/InteractionGame/' + config.interactionGame4}
                />
                <CategoryLi
                  name={config.interactionGame5}
                  setPortfolioListModalStatus={setPortfolioListModalStatus}
                  link={'/portfolio/InteractionGame/' + config.interactionGame5}
                />
                <CategoryLi
                  name={config.interactionGame6}
                  setPortfolioListModalStatus={setPortfolioListModalStatus}
                  link={'/portfolio/InteractionGame/' + config.interactionGame6}
                />
                <CategoryLi
                  name={config.interactionGame7}
                  setPortfolioListModalStatus={setPortfolioListModalStatus}
                  link={'/portfolio/InteractionGame/' + config.interactionGame7}
                />
              </>
            )}
          </CategoryUl>

          {/* VR/AR */}
          <CategoryUl>
            <Category category={'VR/AR'} />
            <CategoryLi
              name={'AR I 갯벌은 어떤 곳일까?'}
              setPortfolioListModalStatus={setPortfolioListModalStatus}
              link={'/portfolio/VrAr/AR I 갯벌은 어떤 곳일까?'}
            />
            <CategoryLi
              name={'AR I 미션! 생태계를 복원하라'}
              setPortfolioListModalStatus={setPortfolioListModalStatus}
              link={'/portfolio/VrAr/AR I 미션! 생태계를 복원하라'}
            />
            <CategoryLi
              name={'AR I 지구의 공전과 계절의 변화'}
              setPortfolioListModalStatus={setPortfolioListModalStatus}
              link={'/portfolio/VrAr/AR I 지구의 공전과 계절의 변화'}
            />
            <CategoryLi
              name={'AR I 땅의 높낮이를 나타내는 등고선'}
              setPortfolioListModalStatus={setPortfolioListModalStatus}
              link={'/portfolio/VrAr/AR I 땅의 높낮이를 나타내는 등고선'}
            />
            <CategoryLi
              name={`AR I 옛 사람들의 통신수단, 봉수제도와 ${isMobile ? '\n' : ''} 파발제도`}
              setPortfolioListModalStatus={setPortfolioListModalStatus}
              link={'/portfolio/VrAr/AR I 옛 사람들의 통신수단, 봉수제도와 파발제도'}
            />
            <CategoryLi
              name={'VR I 우리 땅, 독도 탐험하기'}
              setPortfolioListModalStatus={setPortfolioListModalStatus}
              link={'/portfolio/VrAr/VR I 우리 땅, 독도 탐험하기'}
            />
            <CategoryLi
              name={'VR I 과학수사요원이 되어 범인을 찾아라!'}
              setPortfolioListModalStatus={setPortfolioListModalStatus}
              link={'/portfolio/VrAr/VR I 과학수사요원이 되어 범인을 찾아라!'}
            />
            <CategoryLi
              name={`VR I 세계의 환경 수도 프라이부르크 ${isMobile ? '\n' : ''} 구경하기`}
              setPortfolioListModalStatus={setPortfolioListModalStatus}
              link={'/portfolio/VrAr/VR I 세계의 환경 수도 프라이부르크 구경하기'}
            />
            <CategoryLi
              name={'VR I 태풍 대피요령 알아보기'}
              setPortfolioListModalStatus={setPortfolioListModalStatus}
              link={'/portfolio/VrAr/VR I 태풍 대피요령 알아보기'}
            />
            <CategoryLi
              name={`VR I 모네의 작품으로 알아보는 프랑스 ${isMobile ? '\n' : ''} 기후와 주민생활`}
              setPortfolioListModalStatus={setPortfolioListModalStatus}
              link={'/portfolio/VrAr/VR I 모네의 작품으로 알아보는 프랑스 기후와 주민생활'}
            />
            <CategoryLi
              name={`VR I 직접 만드는 민주적인 선거! 시장 ${isMobile ? '\n' : ''} 출마하기`}
              setPortfolioListModalStatus={setPortfolioListModalStatus}
              link={'/portfolio/VrAr/VR I 직접 만드는 민주적인 선거! 시장 출마하기'}
            />
            <CategoryLi
              name={'VR I 바닷속 생물 채집과 수온, 염분 탐사'}
              setPortfolioListModalStatus={setPortfolioListModalStatus}
              link={'/portfolio/VrAr/VR I 바닷속 생물 채집과 수온, 염분 탐사'}
            />
            <CategoryLi
              name={'AR I 열팽창 활용하여 바이메탈 만들기'}
              setPortfolioListModalStatus={setPortfolioListModalStatus}
              link={'/portfolio/VrAr/AR I 열팽창 활용하여 바이메탈 만들기'}
            />
            <CategoryLi
              name={`AR I 별의 색과 밝기를 이용한 별의 특성 ${isMobile ? '\n' : ''} 알아보기`}
              setPortfolioListModalStatus={setPortfolioListModalStatus}
              link={'/portfolio/VrAr/AR I 별의 색과 밝기를 이용한 별의 특성 알아보기'}
            />
            <CategoryLi
              name={'AR I 나도 할 수 있다, 민사 재판'}
              setPortfolioListModalStatus={setPortfolioListModalStatus}
              link={'/portfolio/VrAr/AR I 나도 할 수 있다, 민사 재판'}
            />
            <CategoryLi
              name={'AR I 나만의 살기 좋은 도시 만들기'}
              setPortfolioListModalStatus={setPortfolioListModalStatus}
              link={'/portfolio/VrAr/AR I 나만의 살기 좋은 도시 만들기'}
            />
            <CategoryLi
              name={`AR I 뼈, 관절, 근육! 우리 몸을 움직이는 ${isMobile ? '\n' : ''} 세박자`}
              setPortfolioListModalStatus={setPortfolioListModalStatus}
              link={'/portfolio/VrAr/AR I 뼈, 관절, 근육! 우리 몸을 움직이는 세박자'}
            />
            <CategoryLi
              name={'AR I 지도를 볼 줄 아는, 나는 지도박사'}
              setPortfolioListModalStatus={setPortfolioListModalStatus}
              link={'/portfolio/VrAr/AR I 지도를 볼 줄 아는, 나는 지도박사'}
            />
            <CategoryLi
              name={'VR I 나만의 생존가방 준비하기'}
              setPortfolioListModalStatus={setPortfolioListModalStatus}
              link={'/portfolio/VrAr/VR I 나만의 생존가방 준비하기'}
            />
            <CategoryLi
              name={`VR I 이중섭 작품을 통해 알아보는 6·25 ${isMobile ? '\n' : ''} 전쟁`}
              setPortfolioListModalStatus={setPortfolioListModalStatus}
              link={'/portfolio/VrAr/VR I 이중섭 작품을 통해 알아보는 6·25 전쟁'}
            />
          </CategoryUl>

          {/* e-Learning & R&D */}
          <CategoryUl>
            <Category category={'e-Learning'} />
            <CategoryLi
              name={'저수지·댐 안전관리 및 재해예방'}
              setPortfolioListModalStatus={setPortfolioListModalStatus}
              link={'/portfolio/e-Learning/저수지·댐 안전관리 및 재해예방'}
            />
            <CategoryLi
              name={'교사가 이끄는 교실혁명'}
              setPortfolioListModalStatus={setPortfolioListModalStatus}
              link={'/portfolio/e-Learning/교사가 이끄는 교실혁명'}
            />
            <CategoryLi
              name={`사이버어울림(기술·가정, 진로와 직업, ${isMobile ? '\n' : ''} 한문)`}
              setPortfolioListModalStatus={setPortfolioListModalStatus}
              link={'/portfolio/e-Learning/사이버어울림(기술·가정, 진로와 직업, 한문)'}
            />
            <CategoryLi
              name={'사이버어울림(영어, 체육)'}
              setPortfolioListModalStatus={setPortfolioListModalStatus}
              link={'/portfolio/e-Learning/사이버어울림(영어, 체육)'}
            />
            <CategoryLi
              name={'정보공시 입력 지침 안내와 시스템매뉴얼'}
              setPortfolioListModalStatus={setPortfolioListModalStatus}
              link={'/portfolio/e-Learning/정보공시 입력 지침 안내와 시스템매뉴얼'}
            />
            <CategoryLi
              name={'화학물질안전에 대하여'}
              setPortfolioListModalStatus={setPortfolioListModalStatus}
              link={'/portfolio/e-Learning/화학물질안전에 대하여'}
            />
            <CategoryLi
              name={'처음 만나는 동아시아사'}
              setPortfolioListModalStatus={setPortfolioListModalStatus}
              link={'/portfolio/e-Learning/처음 만나는 동아시아사'}
            />
            <CategoryLi
              name={'위탁모를 위한 양육 길잡이'}
              setPortfolioListModalStatus={setPortfolioListModalStatus}
              link={'/portfolio/e-Learning/위탁모를 위한 양육 길잡이'}
            />

            <Category style={{ marginTop: '80px' }} category={'R&D'} />
            <CategoryLi
              name={`친환경 소비의 첫걸음, 환경표지인증을 ${isMobile ? '\n' : ''} 통한 더 나은 선택`}
              setPortfolioListModalStatus={setPortfolioListModalStatus}
              link={'/portfolio/R&D/친환경 소비의 첫걸음, 환경표지인증을 통한 더 나은 선택'}
            />
            <CategoryLi
              name={'교실혁명 강의교안'}
              setPortfolioListModalStatus={setPortfolioListModalStatus}
              link={'/portfolio/R&D/교실혁명 강의교안'}
            />

            {isPc && (
              <CategoryLi name={config.rnd3} setPortfolioListModalStatus={setPortfolioListModalStatus} link={'/portfolio/R&D/' + config.rnd3} />
            )}
          </CategoryUl>

          {/* pc해상도 */}
          {/* {!isLongTablet && <></>} */}
          {/* 가로태블릿 */}
          {/* {isLongTablet && <>ddd</>} */}

          {/* {!(isMobileTablet || isLongTablet) && <></>} */}
        </div>
      </div>
    </StyledPortfolioListModal>
  );
};

export default PortfolioListModal;
