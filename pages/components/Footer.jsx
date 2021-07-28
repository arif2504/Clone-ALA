import React from "react";
import Link from 'next/link'

export default function Footer() {
       return (
              <React.Fragment>
                     <div className="footer">
                            <div className="footer-logo mr-5 pt-10">
                                   <img className="w-20 h-15 ml-4" src="/assets/logo.png" alt="" />
                                   <h3> Showcases </h3>
                                   <p>Kami adalah startup yang 
menyediakan sayur - sayur
an segar dan tanpa kimia.</p>
                            </div>
                            <div className="discover pt-10">
                                   <h3> DIscover </h3>
                                   <Link href="">
                                          <a> Product List </a>
                                   </Link>
                                   <Link href="">
                                          <a> Product Category </a>
                                   </Link>
                                   <Link href="">
                                          <a> Compare Product </a>
                                   </Link>
                                   <Link href="">
                                          <a> Review Product </a>
                                   </Link>
                            </div>
                            <div className="news pt-10">
                                   <h3> Newsletter </h3>
                                   <Link href="">
                                          <a> Product List </a>
                                   </Link>
                                   <Link href="">
                                          <a> Product </a>
                                   </Link>
                                   <Link href="">
                                          <a> Specification </a>
                                   </Link>
                                   <Link href="">
                                          <a> Features </a>
                                   </Link>
                            </div>
                            <div className="news pt-10">
                                   <h3> Partners </h3>
                                   <Link href="">
                                          <a> Product List </a>
                                   </Link>
                                   <Link href="">
                                          <a> Product </a>
                                   </Link>
                                   <Link href="">
                                          <a> Specification </a>
                                   </Link>
                                   <Link href="">
                                          <a> Features </a>
                                   </Link>
                            </div>
                            <div className="form pt-10">
                            <h3> Feedback </h3>
                                   <input type="text" />
                            </div>
                     </div>
              </React.Fragment>
       )
}
