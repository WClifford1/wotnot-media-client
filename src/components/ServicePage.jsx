import React from 'react'
import { Link } from 'react-router-dom'

export default function TestCard() {
    return (
        <div className="servy-cont">
        <div className="servy-title">
            <h1>Services Page</h1>
        </div>
        <div className="cards-cont">
        <section class="cards">
        <article class="card card--1">
          {/* <div class="card__info-hover">
             
            
          </div> */}
          <div class="card__img"></div>
          <a href="#" class="card_link">
             <div class="card__img--hover"></div>
           </a>
          <div class="card__info">
            <span class="card__category">Print</span>
            <h3 class="card__title"><a href="#"><Link to="/print">Professional Printing Services</Link></a></h3>
            <span class="card__by">by <a href="#" class="card__author" title="author">Wotnot Media</a></span>
          </div>
        </article>
          
          
        <article class="card card--2">
          {/* <div class="card__info-hover">
            
          </div> */}
          <div class="card__img"></div>
          <a href="#" class="card_link">
             <div class="card__img--hover"></div>
           </a>
          <div class="card__info">
            <span class="card__category">Web Design</span>
            <h3 class="card__title"><a href="#"><Link to="/web">Innovative Web Solutions</Link></a></h3>
            <span class="card__by">by <a href="#" class="card__author" title="author">Wotnot Media</a></span>
          </div>
        </article>  

        <article class="card card--3">
          {/* <div class="card__info-hover">
            
          </div> */}
          <div class="card__img"></div>
          <a href="#" class="card_link">
             <div class="card__img--hover"></div>
           </a>
          <div class="card__info">
            <span class="card__category">Video Content</span>
            <h3 class="card__title"><a href="#"><Link to="/video">Save Your Precious Moments</Link></a></h3>
            <span class="card__by">by <a href="#" class="card__author" title="author">Wotnot Media</a></span>
          </div>
        </article>        
          </section>
          </div>
          </div>
            )
        }
