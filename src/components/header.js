import React, {useState, useEffect} from 'react'
import {Button, Container, FormGroup, InputGroup, Nav, Navbar, NavLink} from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import {LinkContainer} from 'react-router-bootstrap'
import {getUser, getUserDetails} from '../podo/userData'
import {useLocation} from "react-router-dom";
import logo from '../logo.png';
import {FormControl} from 'react-bootstrap'

import {AiOutlineSearch} from 'react-icons/ai'


export const HeaderOld = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [details, setDetails] = useState({});
    const [user, setUser] = useState(getUser());
    const [atHome, setAtHome] = useState(false);
    const [navbar, setNavbar] = useState(false)
    let location = useLocation();
    console.log(loggedIn, details);
    const changeBackground = () => {
        // console.log(window.scrollY)
        if (window.scrollY >= 200) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }
    useEffect(() => {
        setUser(getUser())
        //console.log(user);
        if (user) {
            setLoggedIn(true);
            getUserDetails(user.uid).then((det) => {
                setDetails(det);
            });

        } else {
            setUser(getUser());
            setLoggedIn(false);
        }
        //console.log(location.pathname)
        if (location.pathname === '/' || location.pathname === '/venue/0') {
            setAtHome(true)
            window.addEventListener("scroll", changeBackground)
        } else {
            setAtHome(false);

        }
        // eslint-disable-next-line
    }, [location.pathname])


    return (<header>
        <Navbar variant='dark' bg='dark' expand='lg' collapseOnSelect
                className={(atHome && !navbar) ? 'bg-transparent' : ''}>
            {/*fixed={'top'} sticky={(!atHome) ? 'top' : ''}>*/}
            <Container>

                <LinkContainer to='/'>
                    <Navbar.Brand><img src={logo} alt={'logo'} height={40}/>Lexplus</Navbar.Brand>
                </LinkContainer>


                <NavbarToggle type='button' aria-controls='basic-navbar-nav'/>
                <NavbarCollapse id='basic-navbar-nav' className='justify-content-center'>
                    <Nav className='justify-content-around ms-auto '>

                        {/*<LinkContainer to={loggedIn?   '/profile' : '/login'}>*/}
                        {/*  <NavLink style={{display: 'inline-flex'}}>*/}
                        {/*  <IoPersonCircle color='#FF1744' /> {loggedIn ? (`${details.firstName} ${details.lastName}`) : ('Sign in')}*/}
                        {/*  </NavLink>*/}
                        {/*</LinkContainer>*/}
                        {/*  <LinkContainer to={'/sell'}>*/}
                        {/*     <Button variant={'primary'} size={'sm'}>Become A seller</Button>*/}
                        {/*  </LinkContainer>*/}

                        <LinkContainer to={'/'}>
                            <NavLink style={{
                                mixBlendMode: 'difference'
                            }}>
                                Home
                            </NavLink>
                        </LinkContainer>
                        <LinkContainer to={'/events'}>
                            <NavLink style={{
                                mixBlendMode: 'difference'
                            }}>
                                Events
                            </NavLink>
                        </LinkContainer>
                        <LinkContainer to={'/venues'}>
                            <NavLink style={{
                                mixBlendMode: 'difference'
                            }}>
                                Venues
                            </NavLink>
                        </LinkContainer>
                        <LinkContainer to={'/'}>
                            <NavLink style={{
                                mixBlendMode: 'difference'
                            }}>
                                About
                            </NavLink>
                        </LinkContainer>
                    </Nav>
                </NavbarCollapse>

                <NavbarCollapse className={'justify-content-end'}>
                    <Nav className={'ml-auto'}>
                        <LinkContainer to={'/contact'}>
                            <NavLink style={{
                                mixBlendMode: 'difference'
                            }}>
                                Contact
                            </NavLink>
                        </LinkContainer>
                        <LinkContainer to={'/sell'}>
                            <Button variant={'primary'} size={'sm'}>Become A seller</Button>
                        </LinkContainer>
                    </Nav>
                </NavbarCollapse>

            </Container>
        </Navbar></header>)
}


export default function Header() {

    return (<header>
            <Navbar variant='dark' bg='dark' expand={'lg'} collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand><img src={logo} alt={'logo'} height={40}/>Lexplus</Navbar.Brand>
                    </LinkContainer>
                    <NavbarToggle type='button' aria-controls='basic-navbar-nav'/>
                    <NavbarCollapse id='basic-navbar-nav' className='justify-content-end'>

                        {/*<InputGroup className={'rounded-3 w-25'} style={{*/}
                        {/*    height: '38px'*/}
                        {/*}}>*/}
                        {/*    <InputGroup.Text className={'h-100 rounded-start w-auto'} id="basic-addon1"><AiOutlineSearch/></InputGroup.Text>*/}
                        {/*    <FormControl className={'h-100 rounded-end'} placeholder={'search'} aria-describedby="basic-addon1"/>*/}
                        {/*</InputGroup>*/}
  {/*                      <div className="input-group rounded w-25">*/}
  {/*                          <input type="search" className="form-control rounded" placeholder="Search"*/}
  {/*                                 aria-label="Search" aria-describedby="search-addon" style={{*/}
  {/*                              height: '40px'*/}
  {/*                          }}/>*/}
  {/*                          <span className="input-group-text border-0" id="search-addon">*/}
  {/*  <AiOutlineSearch size={25}/>*/}
  {/*</span>*/}
  {/*                      </div>*/}
                        {/*<span className={'d-flex flex-row'}>*/}
                        {/*    <AiOutlineSearch size={25}/>*/}
                        {/*    <FormControl className='py-0'*/}
                        {/*                 type="text"*/}
                        {/*                 name="search"*/}
                        {/*                 autoCapitalize="off"*/}
                        {/*                 autoComplete="off"*/}
                        {/*                 autoCorrect="off"*/}
                        {/*                 spellCheck="false"*/}
                        {/*                 title="Search input"*/}
                        {/*                 placeholder="Search events, djs and venues"*/}
                        {/*                 style={{*/}
                        {/*                     height: '40px',*/}

                        {/*                     border: '0',*/}
                        {/*                     outline: '0',*/}
                        {/*                     paddingLeft: '14px',*/}
                        {/*                 }}/>*/}
                        {/*</span>*/}
                        <Nav className='justify-content-around '>

                            {/*<LinkContainer to={loggedIn?   '/profile' : '/login'}>*/}
                            {/*  <NavLink style={{display: 'inline-flex'}}>*/}
                            {/*  <IoPersonCircle color='#FF1744' /> {loggedIn ? (`${details.firstName} ${details.lastName}`) : ('Sign in')}*/}
                            {/*  </NavLink>*/}
                            {/*</LinkContainer>*/}
                            {/*  <LinkContainer to={'/sell'}>*/}
                            {/*     <Button variant={'primary'} size={'sm'}>Become A seller</Button>*/}
                            {/*  </LinkContainer>*/}

                            <LinkContainer to={'/'}>
                                <NavLink style={{
                                    mixBlendMode: 'difference'
                                }}>
                                    Home
                                </NavLink>
                            </LinkContainer>
                            <LinkContainer to={'/events'}>
                                <NavLink style={{
                                    mixBlendMode: 'difference'
                                }}>
                                    Events
                                </NavLink>
                            </LinkContainer>
                            <LinkContainer to={'/venues'}>
                                <NavLink style={{
                                    mixBlendMode: 'difference'
                                }}>
                                    Venues
                                </NavLink>
                            </LinkContainer>
                            <LinkContainer to={'/'}>
                                <NavLink style={{
                                    mixBlendMode: 'difference'
                                }}>
                                    About
                                </NavLink>
                            </LinkContainer>

                            {/*<LinkContainer to={'/contact'}>*/}
                            {/*    <NavLink style={{*/}
                            {/*        mixBlendMode: 'difference'*/}
                            {/*    }}>*/}
                            {/*        Contact*/}
                            {/*    </NavLink>*/}
                            {/*</LinkContainer>*/}
                            <LinkContainer to={'/sell'}>
                                {/*<Button className={'rounded-3'} variant={'primary'} size={'sm'} style={{*/}
                                {/*    height: '38px'*/}
                                {/*}}>Become A seller</Button>*/}

                                <NavLink className={'text-secondary'}>
                                    Become A seller
                                </NavLink>
                            </LinkContainer>
                        </Nav>
                    </NavbarCollapse>

                </Container>
            </Navbar>
        </header>)
}



