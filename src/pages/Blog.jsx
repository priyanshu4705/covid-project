import React from 'react'
import '../assets/css/Blog.css'
import Navigation from '../components/Navigation.jsx'
import { Button } from '@material-ui/core'
import Footer from '../components/Footer'
function Blog() {

    const style = { color: "#6c756d", fontSize: "1.125rem", fontFamily: "Audiowide", fontWeight: "300" }
    return (
        <>
            <Navigation />
            <div className="blog">
                <h2 className="heading">COVID-19 VIRUS</h2>
                <div>
                    <ul className="topics">
                        <li><Button href="#china" style={style}> 	Covid in China </Button></li>
                        <li><Button href="#india" style={style}> 	Covid in India </Button></li>
                    </ul>
                </div>
                <div className="section general">
                    <p className="question">What is Coronavirus?</p>
                    <p className="answer">Coronavirus disease 2019 (COVID‑19) is an infectious disease caused by severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2).
                    It was first identified in December 2019 in Wuhan, Hubei, China, and has resulted in an ongoing pandemic.
                    As of 17 August 2020, more than 21.5 million cases have been reported across 188 countries and territories, resulting in more than 773,000 deaths.
                    More than 13.5 million people have recovered.
                    </p>
                    <p className="answer">
                        Common symptoms include fever, cough, fatigue, shortness of breath, and loss of smell and taste. On 13 August 2020, scientists at the University of Southern California reported the "likely" order of initial symptoms of the COVID-19 disease as: "fever, cough, muscle pain, and then nausea, and/or vomiting, and diarrhea".
                        While most people have mild symptoms,some people develop acute respiratory distress syndrome (ARDS) possibly precipitated by cytokine storm, multi-organ failure, septic shock, and blood clots.
                    The time from exposure to onset of symptoms is typically around five days,<div id="china"></div> but may range from two to fourteen days.
                    </p>
                </div>
                <div className="section">
                    <div className="question">COVID-19 pandemic in mainland China</div>
                    <p className="answer">The COVID-19 pandemic originated with a cluster of mysterious, suspected pneumonia cases in the city of Wuhan, the capital of Hubei, China.
                    A Wuhan hospital notified the local center for disease control and prevention (CDC) and health commissions on 27 December 2019. On 31 December, the Wuhan CDC disclosed to the media that there was a cluster of unknown pneumonia cases related to Huanan Seafood Market after the unverified documents appeared on the Internet.
                    The potential disease outbreak soon drew nationwide attention including that of the National Health Commission (NHC) in Beijing who sent experts to Wuhan on the following day.
                    Chinese authorities formally notified the World Health Organization on this same day.On 8 January 2020, a new coronavirus was identified as the cause of the pneumonia.
                      The sequence of the virus was soon published on an open-access database.</p>
                    <p className="answer">Public and media criticism has labeled responses by the Wuhan and Hubei authorities as delayed and as failing to contain the outbreak in its early stage. By 29 January, the virus spread to all provinces of mainland China.
                    All provinces of mainland China initiated the highest response level to public health emergency.
                The World Health Organization declared the outbreak a "Public Health Emergency of International Concern" on 31 January, citing reasons of spread in other countries, particularly those without robust healthcare systems.<div id="india"></div>
                By 8 February,over 724 died from the coronavirus infection-associated pneumonia and 34,878 were confirmed to have been infected.
                    In Hubei alone, there were 24,953 cases of infections and 699 related deaths.</p>
                </div>
                <div className="section">
                    <div className="question">COVID-19 pandemic in India</div>
                    <p className="answer">The COVID-19 pandemic in India is part of the worldwide pandemic of coronavirus disease 2019 (COVID-19) caused by severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2). The first case of COVID-19 in India, which originated from China, was reported on 30 January 2020.
                 India currently has the largest number of confirmed cases in Asia, and has the third highest number of confirmed cases in the world after the United States and Brazil with the number of total confirmed cases breaching the 100,000 mark on 19 May, 200,000 on 3 June,  and 1,000,000 confirmed cases on 17 July 2020.</p>
                    <p className="answer">India's case fatality rate is among the lowest in the world at 2.41% as of 23 July and is steadily declining. Six cities account for around half of all reported cases in the country – Mumbai, Delhi, Ahmedabad, Chennai, Pune and Kolkata.
                    As of 24 May 2020, Lakshadweep is the only region which has not reported a case.
                 India's recovery rate stands at 63.18% as on 23 July 2020.On 10 June, India's recoveries exceeded active cases for the first time.</p>
                    <p className="answer">On 22 March, India observed a 14-hour voluntary public curfew at the instance of the prime minister Narendra Modi.
                    It was followed by mandatory lockdowns in COVID-19 hotspots and all major cities.
                    Further, on 24 March, the Prime Minister ordered a nationwide lockdown for 21 days, affecting the entire 1.3 billion-person population of India.
                 On 14 April, India extended the nationwide lockdown till 3 May which was followed by two-week extensions starting 3 and 17 May with substantial relaxations. From 1 June, the government started "unlocking" the country (barring "containment zones") in three unlock phases.</p>
                    <p className="answer">In March, after the lockdown was imposed, the United Nations (UN) and the World Health Organization (WHO) praised India's response to the pandemic as 'comprehensive and robust,' terming the lockdown restrictions as 'aggressive but vital' for containing the spread and building necessary healthcare infrastructure.
                    At the same time, the Oxford COVID-19 Government Response Tracker (OxCGRT) noted the government's swift and stringent actions, emergency policy-making, emergency investment in health care, fiscal stimulus, investment in vaccine and drug R&D and gave India a score of 100 for the strict response.
                    Also in March, Michael Ryan, chief executive director of the WHO's health emergencies programme noted that India had tremendous capacity to deal with the outbreak owing to its vast experience in eradicating smallpox and polio. Other commentators have raised concerns about the economic fallout arising as a result of the pandemic and preventive restrictions.
                  The lockdown was justified by the government and other agencies for being preemptive to prevent India from entering a higher stage which could make handling very difficult and cause even more losses thereafter.</p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Blog
