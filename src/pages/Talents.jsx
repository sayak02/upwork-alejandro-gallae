import React, { Component } from 'react';
import { Link} from "react-router-dom";
import Navigation from '../components/Navigation.jsx';
import Footer from '../components/Footer.jsx';
import axios from 'axios';
import config from "../config"

class Talents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      hidden: true,
      activeIndex: "",
      selectedImages:[],
      isActiveWomen: false,
      isActiveMen: false,
      currentActive: ''
    }
    this.loadimages = this.loadimages.bind(this);
    this.genderImages = this.genderImages.bind(this);
  }

  componentDidMount() {
    this.loadimages()
  }

  loadimages = () => {
    axios.get(`${config.URL}/talent/section`)
      .then((response) => {
        let images = response.data.item.rows;
       
        images.map((image)=>{
          image.is_requested = false
        }) 
          //save images variable in state
        this.setState({
          images
        })
      });
  }

  genderImages = (gender, filterByDevelopment) => {
    let url = `${config.URL}/talent/section?gender=${gender}`;
    if (filterByDevelopment === true) {
      url += `&development=true`
    }
    axios.get(url)
      .then((response) => {
        this.setState({
          images: response.data.item.rows
        })
      })
  }

  requestImage=(index)=> {
    console.log(index);
    let images = this.state.images;
    let image = images[index]
    image.is_requested = true;
    images[index] = image
    this.setState({...this.state, images: images});
    this.state.selectedImages.push(index);
    console.log("faisal",this.state.images)
  }

  deletselectAll=()=> {
    let images =this.state.images
    images.map((image)=>{
      image.is_requested=false;
    })
    this.setState({
      images
    })
  }

  openTab=(url)=>{
    window.open(url,'_blank');
  }

// https://stackoverflow.com/questions/42391499/react-render-new-row-every-4th-column
render() {
      const {url}=this.props.match
      const token=localStorage.getItem("token");
      const Images = this.state.images;
      const items = this.state.images;
      let rowContents = [];
      const contents = items.reduce((acc, image, i) => {
      rowContents.push(
      <div key={i} className="col-sm-3 col-xs-3 mb-6">
        <div className="image_text">
          {image.is_requested ?
            <div>
              <div className="img-box">
                <img key={image.slug} src={`https://api.systemagency.com${image.Resources[0].route}`}
                alt={image.name}></img>
              </div>
              <div className="top-right top-right-fix">
                <h4 className="">Requested</h4>
              </div>
            </div>
            :
            <div>
              <div className="img-box">
                <img key={image.slug} src={`https://api.systemagency.com${image.Resources[0].route}`}
                alt={image.name}></img>
              </div>
              <div className="top-right top-right-fix">
                <button>
                  <Link className="" data-target="#share" data-toggle="modal">Share</Link></button>
                <button >
                  <Link onClick={()=>this.requestImage(i)} className="">Request</Link></button>
              </div>
            </div>
          }
        </div>
        <p className="style_heading">
          <Link to={`${url}/${image.slug}`} style={{color:"black"}} className="dodit-medium"> <strong className="dodit-bold">{image.name}</strong> {image.last_name}</Link>
        </p>
      </div>

      );
      if (i % 4 === 3) {
        acc.push(
          <div className="row">
            {rowContents}
          </div>
        );
        rowContents = [];
      }

      return acc;
      },[])

      contents.push(<div className="row">
        {rowContents}
      </div>
      );


  return (
  <div>
    <Navigation />
    <div className="Talents mt-6 pt-16">
      <section className="helvetica-neue-italic mx-auto">
        <div className="flex justify-center mb-2 btn-gender">
          <div className="dropdown">
            <button 
              className={this.state.isActiveMen? 
                "active focus:outline-none uppercase hover:text-gray-500 transition duration-700 font-bold"
                : "focus:outline-none uppercase hover:text-gray-500 transition duration-700 font-bold"
              }
              id="about-button">
              <Link 
                onClick={() => { this.setState({...this.state, isActiveWomen: false, isActiveMen: true}) }} 
                className="btn_link"
              >Men</Link>
            </button>
            <div className="dropdown-content">
              <div className="flex justify-center">
                <button onClick={()=> {this.genderImages('men', false)
                  this.setState({...this.state, currentActive: 'men image', isActiveMen: true, isActiveWomen: false})  
                  }}
                  className={this.state.currentActive == 'men image'? 
                      "focus:outline-none uppercase text-sm hover:text-gray-500 transition duration-700 active" :
                      "focus:outline-none uppercase text-sm hover:text-gray-500 transition duration-700"} 
                      id="about-button"
                >
                  <Link activeClassName='active'>Image</Link>
                </button>
                <button onClick={()=> {
                  this.genderImages('men', true)
                  this.setState({...this.state, currentActive: 'men development', isActiveMen: true, isActiveWomen: false})
                }} 
                className={this.state.currentActive == 'men development'? 
                "focus:outline-none uppercase text-sm hover:text-gray-500 transition duration-700 active" :
                "focus:outline-none uppercase text-sm hover:text-gray-500 transition duration-700"} 
                 id="office-button">
                  <Link>Development</Link>
                </button>                
              </div>
            </div>
          </div>
          <div className="dropdown">
            <button
              className={this.state.isActiveWomen? 
                "active focus:outline-none uppercase hover:text-gray-500 transition duration-700 font-bold"
                : "focus:outline-none uppercase hover:text-gray-500 transition duration-700 font-bold"
              }
              id="office-button">
              <Link onClick={() => { this.setState({...this.state, isActiveWomen: true, isActiveMen: false}) }} className="btn_link">Women</Link></button>
            <div className="dropdown-content">
              <div className="flex justify-center left">
                <button onClick={()=> {
                  this.genderImages('women', false)
                  this.setState({...this.state, currentActive: 'women image', isActiveMen: false, isActiveWomen: true})
                }} 
                className={this.state.currentActive == 'women image'? 
                "focus:outline-none uppercase text-sm hover:text-gray-500 transition duration-700 active" :
                "focus:outline-none uppercase text-sm hover:text-gray-500 transition duration-700"}

                id="about-button">
                  <Link>Image</Link></button>
                  <button onClick={()=> {
                  this.genderImages('women', false)
                  this.setState({...this.state, currentActive: 'women development', isActiveMen: false, isActiveWomen: true})
                }} 
                className={this.state.currentActive == 'women development'? 
                "focus:outline-none uppercase text-sm hover:text-gray-500 transition duration-700 active" :
                "focus:outline-none uppercase text-sm hover:text-gray-500 transition duration-700"}

                  id="office-button">
                  <Link>Development</Link></button>
                  <button onClick={()=> {
                  this.genderImages('women', false)
                  this.setState({...this.state, currentActive: 'women curve', isActiveMen: false, isActiveWomen: true})
                }} 
                className={this.state.currentActive == 'women curve'? 
                "focus:outline-none uppercase text-sm hover:text-gray-500 transition duration-700 active" :
                "focus:outline-none uppercase text-sm hover:text-gray-500 transition duration-700"}

                  
                  id="office-button">
                  <Link>Curve</Link></button>
              </div>
            </div>
          </div>

        </div>
       
      </section>
      <div className="side-labels">
        <span className="view-packages"> 
         <button onClick={()=>{   this.openTab(`/viewpackage/${this.state.selectedImages.join(',')}`) }} style={{color:"#333",textDecoration:"none",fontsize:"14px"}} > VIEW PACKAGE</button>
        </span>
        <span className="deselect-all" onClick={()=>this.deletselectAll()}>
          DESELECT ALL
        </span>
      </div>
      <div className="container pad" style={{ width: '78%', marginTop: '60px' }}>
          {contents}
      </div>
    </div>
    <Footer />
    
    <div id="share" class="modal fade" role="dialog">
      <div class="modal-dialog modal-lg">

        <div class="modal-content">          
          <div class="modal-body">
            <h2>Share</h2>
            <form action="">
              <input type="text" placeholder="Email(s)*" />
              <textarea placeholder="Comments*"></textarea>
              <button>Share</button>
            </form>
          </div>                 
        </div>

      </div>
    </div>
    <div id="request" class="modal fade" role="dialog">
      <div class="modal-dialog modal-lg">

        <div class="modal-content">          
          <div class="modal-body">
            <h2 className="helvetica-neue-regular">Request Package</h2>
            <form action="">
              <input type="text" placeholder="Name*" />
              <input type="text" placeholder="Emails*" />
              <textarea placeholder="Comments*"></textarea>
              <button>Request Package</button>
            </form>
          </div>                 
        </div>

      </div>
    </div>
  </div>
  );
  }}

export default Talents;