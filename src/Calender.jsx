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
						<div className="search-txt">
							<h3>December 2023</h3>
							<div>
								<CaretLeft size={20} color="#121212"/>
								<CaretRight size={20} color="#1EBA60" weight="bold" />
							</div>
						</div>
						<table>
							<tr>
								<th>Mon</th>
								<th>Tue</th>
								<th>Wed</th>
								<th>Thu</th>
								<th>Fri</th>
								<th>Sat</th>
								<th>Sun</th>
							</tr>
							<tr>
								<td>1</td>
								<td>2</td>
								<td>3</td>
								<td>4</td>
								<td>5</td>
								<td>6</td>
								<td>7</td>
							</tr>
							<tr>
								<td>8</td>
								<td>9</td>
								<td>10</td>
								<td>11</td>
								<td>12</td>
								<td>13</td>
								<td>14</td>
							</tr>
							<tr>
								<td>15</td>
								<td>16</td>
								<td>17</td>
								<td>18</td>
								<td>19</td>
								<td>20</td>
								<td>21</td>
							</tr>
							<tr>
								<td>22</td>
								<td>23</td>
								<td>24</td>
								<td>25</td>
								<td>26</td>
								<td>27</td>
								<td>28</td>
							</tr>
							<tr>
								<td>29</td>
								<td>30</td>
								<td>31</td>
							</tr>
						</table>
					</div>
                </div>
            }
        </div>
    )
}

export default Calender;