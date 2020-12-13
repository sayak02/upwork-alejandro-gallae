import React, { Component } from 'react'

class CardOffice extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="mx-auto max-w-3xl grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 sm:gap-6 md:gap-4">
        <div className="pb-10 leading-snug">
          <p className="city uppercase helvetica-neue-bold font-bold" style={{ 'font-size': '13px', 'font-weight': '500' }}>Geneva</p>
          <p className="address helvetica-neue-light" style={{ 'font-size': '13px' }}>17 Boulevard des Philosophes</p>
          <p className="country helvetica-neue-light" style={{ 'font-size': '13px' }}>205 Genève, Switzerland</p>
          <p className="e-mail underline helvetica-neue-light" style={{ 'font-size': '13px' }}> <a href=""></a> info@systemagency.com</p>
        </div>

        <div className="pb-10 leading-snug">
          <p className="city uppercase helvetica-neue-bold font-bold" style={{ 'font-size': '13px', 'font-weight': '500' }}>Paris</p>
          <p className="address helvetica-neue-light" style={{ 'font-size': '13px' }}>275 Rue St. Denis</p>
          <p className="country helvetica-neue-light" style={{ 'font-size': '13px' }}>75002 Paris, France</p>
          <p className="e-mail underline helvetica-neue-light" style={{ 'font-size': '13px' }}> <a href=""></a> paris@systemagency.com</p>
        </div>

        <div className="pb-10 leading-snug">
          <p className="city uppercase helvetica-neue-bold  font-bold" style={{ 'font-size': '13px', 'font-weight': '500' }}>BUENOS AIRES</p>
          <p className="address helvetica-neue-light" style={{ 'font-size': '13px' }}>Av. Cramer 1663</p>
          <p className="country helvetica-neue-light" style={{ 'font-size': '13px' }}>Buenos Aires, Argentina</p>
          <p className="e-mail underline helvetica-neue-light" style={{ 'font-size': '13px' }}> <a href=""></a> argentina@systemagency.com</p>
        </div>

        <div className="pb-10 leading-snug">
          <p className="city uppercase helvetica-neue-bold  font-bold" style={{ 'font-size': '13px', 'font-weight': '500' }}>MONTREAL</p>
          <p className="address helvetica-neue-light" style={{ 'font-size': '13px' }}>2065 Rue Parthenais, Suite 270</p>
          <p className="country helvetica-neue-light" style={{ 'font-size': '13px' }}>H2K 3S9 Montreal, QC, Canada</p>
          <p className="e-mail underline helvetica-neue-light" style={{ 'font-size': '13px' }}>
            <a href="">canada@systemagency.com</a>
          </p>
        </div>

        <div className="pb-10 leading-snug">
          <p className="city uppercase helvetica-neue-bold  font-bold" style={{ 'font-size': '13px', 'font-weight': '500' }}>BARCELONA</p>
          <p className="address helvetica-neue-light" style={{ 'font-size': '13px' }}>Carrer de Sant Eusebi 7</p>
          <p className="country helvetica-neue-light" style={{ 'font-size': '13px' }}>08006 Barcelona, Spain</p>
          <p className="e-mail underline helvetica-neue-light" style={{ 'font-size': '13px' }}>
            <a href="">spain@systemagency.com</a>
          </p>
        </div>

        <div className="pb-10 leading-snug">
          <p className="city uppercase helvetica-neue-bold  font-bold" style={{ 'font-size': '13px', 'font-weight': '500' }}>BELGRADE</p>
          <p className="address helvetica-neue-light" style={{ 'font-size': '13px' }}>21 Divizije 6/-1</p>
          <p className="country helvetica-neue-light" style={{ 'font-size': '13px' }}>Belgrade, Serbia</p>
          <p className="e-mail underline helvetica-neue-light" style={{ 'font-size': '13px' }}>
            <a href="">serbia@systemagency.com</a>
          </p>
        </div>

        <div className="pb-10 leading-snug">
          <p className="city uppercase helvetica-neue-bold  font-bold" style={{ 'font-size': '13px', 'font-weight': '500' }}>KIEV</p>
          <p className="address helvetica-neue-light" style={{ 'font-size': '13px' }}>10 Volodymyrska</p>
          <p className="country helvetica-neue-light" style={{ 'font-size': '13px' }}>Kiev, Ukraine</p>
          <p className="e-mail underline helvetica-neue-light" style={{ 'font-size': '13px' }}>
            <a href="">ukraine@systemagency.com</a>
          </p>
        </div>

        <div className="pb-10 leading-snug">
          <p className="city uppercase helvetica-neue-bold  font-bold" style={{ 'font-size': '13px', 'font-weight': '500' }}>MOSCOW</p>
          <p className="address helvetica-neue-light" style={{ 'font-size': '13px' }}>Spartakovsky per. 2/1</p>
          <p className="country helvetica-neue-light" style={{ 'font-size': '13px' }}>Moscow, Russia</p>
          <p className="e-mail underline helvetica-neue-light" style={{ 'font-size': '13px' }}>
            <a href="">russia@systemagency.com</a>
          </p>
        </div>

        <div className="pb-10 leading-snug">
          <p className="city uppercase helvetica-neue-bold  font-bold" style={{ 'font-size': '13px', 'font-weight': '500' }}>PODGORICA</p>
          <p className="address helvetica-neue-light" style={{ 'font-size': '13px' }}>Radoja Dakica 4-5</p>
          <p className="country helvetica-neue-light" style={{ 'font-size': '13px' }}>81000 Podgorica, Montenegro</p>
          <p className="e-mail underline helvetica-neue-light" style={{ 'font-size': '13px' }}>
            <a href="">adria@systemagency.com</a>
          </p>
        </div>

        <div className="pb-10 leading-snug">
          <p className="city uppercase helvetica-neue-bold  font-bold" style={{ 'font-size': '13px', 'font-weight': '500' }}>TALLINN</p>
          <p className="address helvetica-neue-light" style={{ 'font-size': '13px' }}>Tina 1a</p>
          <p className="country helvetica-neue-light" style={{ 'font-size': '13px' }}>10126 Tallinn, Estonia</p>
          <p className="e-mail underline helvetica-neue-light" style={{ 'font-size': '13px' }}>
            <a href="">estonia@systemagency.com</a>
          </p>
        </div>

        <div className="pb-10 leading-snug">
          <p className="city uppercase helvetica-neue-bold  font-bold" style={{ 'font-size': '13px', 'font-weight': '500' }}>RIGA</p>
          <p className="address helvetica-neue-light" style={{ 'font-size': '13px' }}>Kungu iela 8</p>
          <p className="country helvetica-neue-light" style={{ 'font-size': '13px' }}>LV-1050 Riga, Latvia</p>
          <p className="e-mail underline helvetica-neue-light" style={{ 'font-size': '13px' }}>
            <a href="">latvia@systemagency.com</a>
          </p>
        </div>

      </div>
    );
  }
}

export default CardOffice;
