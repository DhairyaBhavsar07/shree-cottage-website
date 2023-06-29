import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import logo1 from '../eventImg/content-1.png';
import logo2 from '../eventImg/content-2.png';
import logo3 from '../eventImg/content-3.png';
import Button from '@mui/material/Button';
import '../styles/Content.css'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, CardActions } from '@mui/material';

function MyComponent() {
    return (
        <Box sx={{ background: '#FFE2D8', paddingBottom: '4rem' }}>
            <Container className='stack'>
                <Stack >
                    <Box
                        className="box"
                        sx={{
                            display: 'flex',
                            mt: '4.2rem',
                            height: '23vw',
                        }}
                    >
                        <Typography>
                            <img
                                src={logo1}
                                className="image1"
                                alt="Logo"
                                style={{ borderRadius: '20px 0px 0px 20px', width: '38vw', height: '23vw' }}
                            />
                        </Typography>
                        <Typography className="desc1" sx={{ background: '#FFFFFF', borderRadius: '0px 20px 20px 0px' }}>
                            <Typography className="desc1-head" sx={{ fontSize: '1.5em', color: '#3D2521', fontFamily: 'Bona Nova', mt: '0.7rem', ml: '4rem' }}>
                                Wedding
                            </Typography>
                            <Typography className="desc1-desc" sx={{ color: '#484848', fontFamily: 'Poppins', mt: '1rem', ml: '4rem', mr: '4rem', fontSize: '19px' }}>
                                we offer a spacious 6000 sq. ft. banquet hall and a stunning 20,000
                                sq. ft. garden lawn, perfect for any occasion. Located in a serene natural
                                setting, it is an ideal getaway. With 29 comfortable rooms, we provide excellent
                                accommodation for wedding guests. Shree Cottages is known as the top choice
                                for destination weddings in Gir, offering unmatched beauty and outstanding
                                service.

                            </Typography>
                        </Typography>
                    </Box>

                    <Box
                        className="box"
                        sx={{
                            display: 'flex',
                            mt: '4.2rem',
                            height: '23vw',
                        }}
                    >
                        <Typography className="desc1" sx={{ background: '#FFFFFF', height: '26vw', borderRadius: '20px 0px 0px 20px' }}>
                            <Typography className="desc1-head" sx={{ fontSize: '1.5em', color: '#3D2521', fontFamily: 'Bona Nova', mt: '0.7rem', ml: '4rem' }}>
                                Conferences
                            </Typography>
                            <Typography className="desc1-desc" sx={{ color: '#484848', fontFamily: 'Poppins', mt: '1rem', ml: '4rem', mr: '4rem', fontSize: '19px', letterSpacing: '1px' }}>
                                Experience the finest conference facilities at Shree Cottages. Our
                                resort offers the best hall in the region, perfect for conferences, meetings, and
                                corporate events. Immerse yourself in the tranquility of the surrounding jungle
                                while conducting your next team-building or corporate gathering. With a
                                proven track record of organizing successful events for groups of all sizes, Shree
                                Cottages is becoming the preferred corporate offsite destination in and around
                                Gujarat.
                            </Typography>
                        </Typography>
                        <Typography>
                            <img
                                src={logo2}
                                className="image1"
                                alt="Logo"
                                style={{ borderRadius: '0px 20px 20px 0px', width: '38vw', height: '26vw' }}
                            />
                        </Typography>
                    </Box>

                    <Box
                        className="box"
                        sx={{
                            display: 'flex',
                            mt: '6.9rem',
                            height: '23vw',
                        }}
                    >
                        <Typography>
                            <img
                                src={logo3}
                                className="image1"
                                alt="Logo"
                                style={{ borderRadius: '20px 0px 0px 20px', width: '38vw', height: '26vw' }}
                            />
                        </Typography>
                        <Typography className="desc1" sx={{ background: '#FFFFFF', borderRadius: '0px 20px 20px 0px', height: '26vw' }}>
                            <Typography className="desc1-head" sx={{ fontSize: '1.5em', color: '#3D2521', fontFamily: 'Bona Nova', mt: '0.8rem', ml: '4rem' }}>
                                Event Planning
                            </Typography>
                            <Typography className="desc1-desc" sx={{ color: '#484848', fontFamily: 'Poppins', mt: '1rem', ml: '4rem', mr: '4rem', fontSize: '19px', letterSpacing: '1px' }}>
                                Let us handle every detail of your special event at Shree
                                Cottages. Our dedicated team excels in event planning, ensuring a seamless
                                and unforgettable experience. From weddings to birthdays, corporate
                                gatherings to social celebrations, we have you covered. With our expertise and
                                attention to detail, we will bring your vision to life and create a truly
                                memorable occasion. Trust Shree Cottages for exceptional event planning
                                services that will exceed your expectations.
                            </Typography>
                        </Typography>
                    </Box>
                </Stack>



                <Button variant="contained"
                    sx={{
                        background: 'linear-gradient(180deg, #FFAA7D 0%, #FFBB70 100%)',
                        borderRadius: '5px',
                        color: '#3D2521',
                        padding: '10px 30px',
                        textAlign: 'center',
                        margin: 'auto',
                        display: 'flex',
                        justifyContent: 'center',
                        mt: '9.5rem',
                    }}
                >
                    Call us <svg style={{ marginLeft: "10px" }} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.333008 7.76666L0.333008 6.09999L10.333 6.09999L5.74967 1.51666L6.93301 0.333325L13.533 6.93333L6.93301 13.5333L5.74967 12.35L10.333 7.76666L0.333008 7.76666Z" fill="#3D2521" />
                    </svg>

                </Button>
            </Container>

            <Container className='mobileStack' sx={{ paddingTop: '4rem' }} mt={2}>

                <Card mt={2} className="box" sx={{ borderRadius: '10px 10px 0px 0px' }} >
                    <CardActionArea sx={{ borderRadius: '10px 10px 0px 0px' }}>
                        <CardMedia
                            mt={5}
                            component="img"
                            width='100vw'
                            image={logo1}
                            alt="green iguana"
                            sx={{ borderRadius: '10px 10px 0px 0px' }}
                        />
                        <CardContent sx={{ background: '#FFFFFF', borderRadius: '0px 0px 10px 10px' }}>
                            <Typography gutterBottom style={{ textAlign: 'center', fontSize: '18px', fontFamily: 'Bona Nova', letterSpacing: '1.26px', color: '#3D2521' }} >
                                Wedding
                            </Typography>
                            <Typography sx={{ fontFamily: 'Poppins', color: '#484848', textAlign: 'center', fontSize: '14px', fontFamily: 'Poppins', lineHeight: '150%', letterSpacing: '0.98px' }}>
                                we offer a spacious 6000 sq. ft. banquet hall and a stunning 20,000
                                sq. ft. garden lawn, perfect for any occasion. Located in a serene natural
                                setting, it is an ideal getaway. With 29 comfortable rooms, we provide excellent
                                accommodation for wedding guests. Shree Cottages is known as the top choice
                                for destination weddings in Gir, offering unmatched beauty and outstanding
                                service.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card mt={2} className="box" sx={{ borderRadius: '10px 10px 10px 0px' }} >
                    <CardActionArea sx={{ borderRadius: '10px 10px 10px 0px' }}>
                        <CardMedia
                            mt={5}
                            component="img"
                            width='100vw'
                            image={logo2}
                            alt="green iguana"
                            sx={{ borderRadius: '0px 0px 0px 0px' }}
                        />
                        <CardContent sx={{ background: '#FFFFFF', borderRadius: '0px 0px 10px 10px' }}>
                            <Typography gutterBottom style={{ textAlign: 'center', fontSize: '18px', fontFamily: 'Bona Nova', letterSpacing: '1.26px', color: '#3D2521' }} >
                                Conferences
                            </Typography>
                            <Typography sx={{ fontFamily: 'Poppins', color: '#484848', textAlign: 'center', fontSize: '14px', fontFamily: 'Poppins', lineHeight: '150%', letterSpacing: '0.98px' }}>
                                Experience the finest conference facilities at Shree Cottages. Our
                                resort offers the best hall in the region, perfect for conferences, meetings, and

                                corporate events. Immerse yourself in the tranquility of the surrounding jungle
                                while conducting your next team-building or corporate gathering. With a
                                proven track record of organizing successful events for groups of all sizes, Shree
                                Cottages is becoming the preferred corporate offsite destination in and around
                                Gujarat.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card mt={2} className="box" sx={{ borderRadius: '10px 10px 0px 0px' }} >
                    <CardActionArea sx={{ borderRadius: '10px 10px 0px 0px' }}>
                        <CardMedia
                            mt={5}
                            component="img"
                            width='100vw'
                            image={logo3}
                            alt="green iguana"
                            sx={{ borderRadius: '10px 10px 0px 0px' }}
                        />
                        <CardContent sx={{ background: '#FFFFFF', borderRadius: '0px 0px 10px 10px' }}>
                            <Typography gutterBottom style={{ textAlign: 'center', fontSize: '18px', fontFamily: 'Bona Nova', letterSpacing: '1.26px', color: '#3D2521' }} >
                                Event Planning
                            </Typography>
                            <Typography sx={{ fontFamily: 'Poppins', color: '#484848', textAlign: 'center', fontSize: '14px', fontFamily: 'Poppins', lineHeight: '150%', letterSpacing: '0.98px' }}>
                                Let us handle every detail of your special event at Shree
                                Cottages. Our dedicated team excels in event planning, ensuring a seamless
                                and unforgettable experience. From weddings to birthdays, corporate
                                gatherings to social celebrations, we have you covered. With our expertise and
                                attention to detail, we will bring your vision to life and create a truly
                                memorable occasion. Trust Shree Cottages for exceptional event planning
                                services that will exceed your expectations.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>



                <Button variant="contained"
                    sx={{
                        background: 'linear-gradient(180deg, #FFAA7D 0%, #FFBB70 100%)',
                        borderRadius: '5px',
                        color: '#3D2521',
                        padding: '10px 30px',
                        textAlign: 'center',
                        margin: 'auto',
                        display: 'flex',
                        justifyContent: 'center',
                        mt: '4.6rem',
                    }}
                >
                    Call us <svg style={{ marginLeft: "10px" }} width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.333008 7.76666L0.333008 6.09999L10.333 6.09999L5.74967 1.51666L6.93301 0.333325L13.533 6.93333L6.93301 13.5333L5.74967 12.35L10.333 7.76666L0.333008 7.76666Z" fill="#3D2521" />
                    </svg>

                </Button>
            </Container>



        </Box>
    );
}

export default MyComponent;
