import style from 'styled-components';

export const Card = style.div`
    height: auto;
    padding: 1rem;
    box-shadow: 0px 0px 0px 1px #ffffff;
    border-radius: 0;
    text-decoration: none;
    color: #151516;
    text-transform: capitalize;
    background: #fff;

    :hover {
        background: #e5e5e5;
        color: #151516;
    }
`;