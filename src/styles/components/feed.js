import styled, {css} from 'styled-components';
import { ArrowLeft, Home, Search, Notifications, Email } from '../icons'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Tab = styled.div`
    margin-top: 10px;
    padding: 11px 0 15px;
    font-weight: 700;
    font-size: 15px;
    text-align: center;
    outline: 0;
    cursor: pointer;
    color: ${props=> props.theme.colors.posterr};
    border-bottom: 2px solid ${props=> props.theme.colors.posterr};
    &:hover{
        background: ${props=> props.theme.colors.darkHover};
    }
`;

export const Posts = styled.div`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
`;


const iconCss = css`
    width: 31px;
    height: 31px;
    cursor: pointer;
    color:${props=> props.theme.colors.gray};
    &:hover, &.active{
        fill: ${props=> props.theme.colors.posterr}
    }
`;
export const HomeIcon=styled(Home)`${iconCss}`;
