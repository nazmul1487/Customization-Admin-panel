import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { styled } from '@material-ui/core/styles';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

export default function DropDown() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const MyMenuItem = styled(MenuItem)({
    // padding: '35px',
    backgroundColor: '#343A40',
    width:'180px',
    padding: 0,
    marginTop:1,
});

  return (
    <div>
      <Button className="our-service"
              color="inherit"
              style={{marginRight:'30px', fontSize:15,paddingLeft:'10px'}}
              aria-controls="simple-menu" aria-haspopup="true"
              onMouseOver={handleClick}
      >
        Our Service
        {/*<ArrowDownwardIcon style={{marginLeft:10}}/>*/}
      </Button>
      <Menu
        id="simple-menu"
        autoFocus={false}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        style={{marginTop:40,padding:0}}
      >
        <MyMenuItem >
          <Button href="/motorola" style={{color:'white',paddingRight:'20px', width: "100%", }}>Motorola</Button>
        </MyMenuItem>
        <MyMenuItem >
          <Button href="/lenevo" style={{color:'white',paddingRight:'20px',  width: '100%'}}>Salextra Shop</Button>
        </MyMenuItem>
        {/*<MyMenuItem >*/}
        {/*  <Button href="/oppo" style={{color:'white',paddingRight:'20px',  width: '100%'}}>Oppo</Button>*/}
        {/*</MyMenuItem>*/}
        {/*<MyMenuItem >*/}
        {/*  <Button href="/tecno" style={{color: 'white',paddingRight:'20px',  width: '100%'}}>Tecno</Button>*/}
        {/*</MyMenuItem>*/}
        {/*<MyMenuItem >*/}
        {/*  <Button href="/oraimo" style={{color:'white',paddingRight:'20px', width: '100%'}}>Oraimo</Button>*/}
        {/*</MyMenuItem>*/}
      </Menu>
    </div>
  );
}