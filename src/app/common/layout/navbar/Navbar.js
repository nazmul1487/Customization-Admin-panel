import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import { styled } from '@material-ui/core/styles';
import "./navBarStyle.css"


const styles = (theme) => ({
    grow: {
      flexGrow: 1,
        background: "#343A40",
        height: '85px', //12-04 update
    },
    title: {
      display: "flex",
      [theme.breakpoints.up("sm")]: {
        display: "block"
      }
    },
    sectionDesktop: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex"
      },
        color:"white",
      '&:hover' : {

      }
    },
    sectionMobile: {
      display: "flex",
      [theme.breakpoints.up("md")]: {
        display: "none"
      },
    },

    button:{
      '&:hover' : {
        backgroundColor: '#F05A28',
      }
    }

});

const MyMenuItem = styled(MenuItem)({
  padding: '8px 40px',
    paddingTop: 0,
    backgroundColor: '#343A40',

});


class Navbar extends React.Component {
      state = {
        achorEl: false,
        MobileMoreAnchorEl: false
      };

      handleMobileMenuClose = () => {
        this.setState({
          mobileMoreAnchorEl: null
        });
      };

      handleMobileMenuOpen = (event) => {
        this.setState({
          mobileMoreAnchorEl: event.currentTarget
        });

      };

      render() {
        const { classes } = this.props;
        const isMobileMenuOpen = Boolean(this.state.mobileMoreAnchorEl);
        const mobileMenuId = "primary-search-account-menu-mobile";
        const renderMobileMenu = (
          <Menu
            anchorEl={this.state.mobileMoreAnchorEl}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={isMobileMenuOpen}
            onClose={this.handleMobileMenuClose}
            style={{padding:0,margin:0}}

          >
            {/*<MyMenuItem >*/}
            {/*  <Button href="/home" style={{color:'white',width:'100%'}}>Home</Button>*/}
            {/*</MyMenuItem>*/}

            <MyMenuItem>
              <Button href="/about" style={{color:'white',width:'100%'}}>About Us</Button>
            </MyMenuItem>

            <MyMenuItem>
              <Button href="/service" style={{color:'white',width:'100%'}}>Business</Button>
            </MyMenuItem>

            <MyMenuItem>
              <Button href="/team" style={{color:'white',width:'100%'}}>Leadership</Button>
            </MyMenuItem>

            <MyMenuItem>
              <Button href="/forum" style={{color:'white',width:'100%'}}>News</Button>
            </MyMenuItem>

            <MyMenuItem>
              <Button href="/gallery" style={{color:'white',width:'100%'}}>Gallery</Button>
            </MyMenuItem>

            <MyMenuItem>
              <Button href="/contact" style={{color:'white',width:'100%'}}>Contact Us</Button>
            </MyMenuItem>

            <MyMenuItem>
              <p style={{color:'#F05A28', fontSize:"18px",}}>Hotline: +8801810008810 </p>
            </MyMenuItem>
            </Menu>
        );

      return (
        <div className={classes.grow}>
          <AppBar position="static" color="transparent">
            <Toolbar>
              <img src={'media/logo.png'} className="logo-img" onClick={event =>  window.location.href='/home'}  alt="logo"/>

                <div className={classes.sectionDesktop}>
                    {/*<Button href="/home" style={{color:'white',marginRight:'20px', fontSize:15}}>Home</Button>*/}
                    <Button className={classes.button} href="/about" style={{color:'white', marginRight:'20px', fontSize:15}}>About Us</Button>
                    <Button className={classes.button} href="/service" style={{color:'white', marginRight:'20px', fontSize:15}}>Business</Button>
                    <Button className={classes.button} href="/team" style={{color:'white', marginRight:'20px', fontSize:15}}>Leadership</Button>
                    <Button className={classes.button} href="/forum" style={{color:'white', marginRight:'20px', fontSize:15 }}>News</Button>
                    <Button className={classes.button} href="/gallery" style={{color:'white', marginRight:'20px', fontSize:15 }}>Gallery</Button>
                    <Button className={classes.button} href="/contact" style={{color:'white', marginRight:'20px', fontSize:15}}>Contact Us</Button>

                </div>
                <div className={classes.grow} />
                <div className={classes.sectionDesktop}>
                    <p style={{color:'#F05A28',fontSize:"20px", marginTop:'8px'}}>Hotline: +8801810008810 </p>
                </div>
                <div className={classes.sectionMobile}>
                  <IconButton
                    aria-label="menu"
                    aria-controls={mobileMenuId}
                    aria-haspopup="true"
                    onClick={this.handleMobileMenuOpen}
                    style={{color:'white'}}
                  >
                  <MenuIcon />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
          {renderMobileMenu}
        </div>
      );
    }
  }

export default withStyles(styles)(Navbar);
