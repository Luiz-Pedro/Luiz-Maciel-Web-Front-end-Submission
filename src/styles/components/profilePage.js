import styled, {css} from 'styled-components';
import { LocationOn, Cake } from '../icons'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-height: 100%;
    overflow-y: auto;

    scrollbar-width: none;
    ::-webkit-scrollbar{
        display: none;
    }
`;

export const Banner = styled.div`
    flex-shrink: 0;
    width: 100%;
    height: min(33vw, 199px);
    background: ${props=> props.theme.colors.posterr};
    position: relative;
`;


export const Avatar= styled.div`
    width: max(45px, min(135px, 22vw));
    height: max(45px, min(135px, 22vw));
    border: 3.75px solid ${props=> props.theme.colors.primary}; 
    border-radius: 50%;
    background: ${props=> props.theme.colors.gray};
    position: absolute;
    bottom: max(-60px, -10vw);
    left: 15px;

`;
export const ProfileData= styled.div`
    padding: min(calc(10vw + 7px), 67px) 16px 0;
    display: flex;
    flex-direction: column;
    position: relative;
    > h1{
        font-weight: 700;
        font-size: 19px;;
    }
    > h2{
        font-weight: 400;
        font-size: 15px;
        color: ${props=> props.theme.colors.gray}; 
    }
    > p{
        font-size: 15px;
        margin-top: 12px;
    }
    > ul{
        margin-top: 1.5em;
        margin-bottom: 1em;
        > li{
            font-size: 15px;
            color: ${props=> props.theme.colors.gray}; 
            margin-bottom: 0.5em;
            display: flex;
            align-items: center;
            > svg{
                fill: ${props=> props.theme.colors.gray}; 
                margin-right: 5px;
            }
        }
    }
`;

export const Followage= styled.div`
    display: flex;

    > span{
        font-size: 15px;
        color: ${props=> props.theme.colors.gray}; 
        & + span{
            margin-left: 20px;
        }
        > strong{
            color: ${props=> props.theme.colors.white}; 
        }
    }
`;

const iconCss = css`
    width: 20px;
    height: 20px;
    color:${props=> props.theme.colors.gray}; 
`;

export const LocationIcon= styled(LocationOn)`${iconCss}`;
export const CakeIcon= styled(Cake)`${iconCss}`;