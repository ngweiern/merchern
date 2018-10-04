import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles'
import CardMedia from "@material-ui/core/CardMedia/CardMedia";
import classnames from 'classnames';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const styles = theme => ({
  media: {
    height: 0,
    paddingTop: '100%',
    transform: 'rotate(90deg)',
  },
  prev: {

  },
  next: {
    right: 0,
    borderRadius: '3px 0 0 3px'
  },
  style: {
    maxHeight: 100,
    transform: 'rotate(90deg) translate(0, -100%)',
    transformOrigin: 'top left',
    position: 'relative',
    marginRight: '5px',
    boxSizing: 'border-box',
    border: '2px solid transparent'
  },
  arrows: {
    cursor: 'pointer',
    position: 'absolute',
    top: '50%',
    width: 'auto',
    padding: '5px',
    fontWeight: 'bold',
    // fontSize: '30px',
    // color: 'rgb(59, 59, 63)',
    transition: '0.6s ease',
    borderRadius: '0 3px 3px 0',
    marginTop: '-22px'
  },
  carousel: {
    position: 'relative'
  },
  images: {
    marginTop: 30,
    transform: 'translate(20%, 0)',
    left: '50%',
    textAlign: 'center',
    height: '100%',
    width: '80%',
    boxSizing: 'border-box'
  },
  selected: {
    border: '2px solid rgb(128, 130, 132)',
  },
  hovered: {
    border: '2px solid rgb(170, 173, 175)'
  }
});

class ProductImagesCarousel extends Component {

  state = {
    selectedId: '1',
    hoveredId: null,
  };

  goTo = (number, len) => {
    let resultId = parseFloat(this.state.selectedId) + number;
    let nextId;

    if (resultId > len) {
      nextId = 1
    } else if (resultId === 0) {
      nextId = len
    } else {
      nextId = resultId
    }

    this.setState({
      selectedId: nextId.toString()
    })
  };

  handleClick = e => {
    this.setState({
      selectedId: e.target.id
    });
  };

  handleMouseEnter = e => {
    this.setState({
      hoveredId: e.target.id
    });
  };

  handleMouseLeave = () => {
    this.setState({
      hoveredId: null
    })
  };

  render = () => {
    const {classes, images} = this.props;

    const imageRow = images.map(image => {
      return (
        <img
          key={image.id}
          id={image.id}
          src={image.url}
          alt={image.alt}
          onClick={this.handleClick}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          className={classnames(classes.style, {
            [classes.selected]: (this.state.selectedId === image.id),
            [classes.hovered]: (this.state.hoveredId === image.id)
          })} />
      )
    });

    const selectedImage = images.find(imageObj => {
      return imageObj.id === this.state.selectedId
    });

    const selectedImageUrl = selectedImage['url'];

    return (
      <div>
        <CardMedia
          className={classes.media}
          image={selectedImageUrl}
        />

        <div className={classes.carousel}>
          <a className={classnames(classes.arrows, classes.prev)}
             onClick={() => {this.goTo(-1, images.length)}}>
            <ArrowBackIosIcon />
          </a>
          <div className={classes.images}>
            {imageRow}
          </div>
          <a className={classnames(classes.arrows, classes.next)}
             onClick={() => {this.goTo(1, images.length)}}>
            <ArrowForwardIosIcon />
          </a>
        </div>
      </div>
    )
  }
};

export default withStyles(styles)(ProductImagesCarousel)