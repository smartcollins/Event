import React,{useState} from "react";
import {UsersThree,DotsThreeVertical,CaretRight,CaretLeft} from "phosphor-react";

function Calender(){
    const [all,setAll] = useState(false);
    
    function onAll(){
        setAll(true)
    }

    return(
        <div>
            {
                all?
                <div>sdfg</div>:
                <div className="Home">
                    <div className="home-top">
						<div className="back">
							<UsersThree size={40} color="#1EBA60" weight="duotone"/>
							<h1>My Donation</h1>
						</div>
						<div className="home-top">
                            <button className="dot">
                                <DotsThreeVertical size={30} color="#1EBA60" weight="duotone"/>
                            </button>
                        </div>
					</div>
                    <div className="calender">
						<div className="calender-date">
							<h3>December 2023</h3>
							<div>
								<CaretLeft size={20} color="#121212"/>
								<CaretRight size={20} color="#1EBA60" weight="bold" />
							</div>
						</div>
						<div className="calender-top">
							<h4>Mo</h4>
							<h4>Tu</h4>
							<h4>We</h4>
							<h4>Th</h4>
							<h4>Fr</h4>
							<h4>Sa</h4>
							<h4>Su</h4>
							<p>1</p>
							<p>2</p>
							<p>3</p>
							<p>4</p>
							<p>5</p>
							<p>6</p>
							<p>7</p>

							<p>8</p>
							<p>9</p>
							<p>10</p>
							<p>11</p>
							<p>12</p>
							<p>13</p>
							<p>14</p>

							<p>15</p>
							<p>16</p>
							<p>17</p>
							<p>18</p>
							<p>19</p>
							<p>20</p>
							<p>21</p>

							<p>22</p>
							<p className="diff">23</p>
							<p>24</p>
							<p>25</p>
							<p>26</p>
							<p>27</p>
							<p>28</p>

							<p>29</p>
							<p>30</p>
							<p>31</p>
						</div>
					</div>
                </div>
            }
        </div>
    )
}

export default Calender;