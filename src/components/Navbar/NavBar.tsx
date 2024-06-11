import React from 'react';
import styled from '@emotion/styled';

interface Link {
    href: string;
    title: string;
    active?: boolean;
}

interface NavBarProps {
    links: Link[];
    backgroundColor?: string;
    linkColor?: string;
}

interface NavBarContainerProps {
    backgroundColor?: string;
}

interface NavBarLinkProps {
    color?: string;
}

const NavBarContainer = styled.nav<NavBarContainerProps>(
    {
        padding: '10px',
    },
    props => ({
        backgroundColor: props.backgroundColor || 'white',
    })
);

const NavBarList = styled.ul({
    listStyle: 'none',
    display: 'flex',
});

const NavBarItem = styled.li<{ active?: boolean }>(({ active }) => ({
    marginRight: '20px',
    fontWeight: active ? 'bold' : 'normal',
}));

const NavBarLink = styled.a<NavBarLinkProps>(
    {
        textDecoration: 'none',
    },
    props => ({
        color: props.color || 'black',
    })
);

const NavBar: React.FC<NavBarProps> = ({ links, backgroundColor = 'orange', linkColor = 'black' }) => {
    return (
        <NavBarContainer backgroundColor={backgroundColor}>
            <NavBarList>
                {links.map(( link, index ) => (
                    <NavBarItem key={index} active={link.active}>
                        <NavBarLink href={link.href} color={linkColor}>{link.title}</NavBarLink>
                    </NavBarItem>
                ))}
            </NavBarList>
        </NavBarContainer>
    );
};

export default NavBar;