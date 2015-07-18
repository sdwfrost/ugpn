---
title       : Multiscale modeling of HIV
subtitle    : 
author      : Simon Frost
job         : 
framework   : revealjs        # {io2012, html5slides, shower, dzslides, ...}
highlighter : highlight.js  # {highlight.js, prettify, highlight}
hitheme     : tomorrow      # 
widgets     : [mathjax]            # {mathjax, quiz, bootstrap}
mode        : selfcontained # {standalone, draft}
knit        : slidify::knit2slides
revealjs: 
  center: "false"
  theme: simple
  transition: linear

--- ds:cobalt






<h2 style="color:#FFFF00">Multiscale modeling of HIV dynamics and evolution</h2>
<br>
<br>
<h3 style="color:#FFFFFF">Simon Frost, M.A. D.Phil.</h3>

*Dept. of Veterinary Medicine, and Institute of Public Health*

*University of Cambridge*

<img width="10%" style="border:0px;" src="assets/img/cu.svg">

<script src="assets/js/jquery.js"></script>

---

## Introduction

- Dynamics linked to evolution
- Link between within and between host scales

---

## Why model?

- Observational data
- Natural experiments
- Cheap
- Makes assumptions clear

---

## People living with HIV

<div>
<!-- IMAGEMAP START-->
<script>
function Switch(picname,location) {
    document.images[picname].src = location;
}
</script>
<img src="assets/img/aids1.jpg" width="780" height="400" usemap="#aids-imagemap" name="map" border=0 alt="" style="border:0px;"/>
<map name="aids-imagemap">
<area shape="rect" coords="5,13,194,40" href="" onMouseOver="Switch('map','assets/img/aids1.jpg')">
<area shape="rect" coords="198,13,388,40" href="" onMouseOver="Switch('map','assets/img/aids2.jpg')">
<area shape="rect" coords="392,13,582,40" href="" onMouseOver="Switch('map','assets/img/aids3.jpg')">
<area shape="rect" coords="586,13,776,40" href="" onMouseOver="Switch('map','assets/img/aids4.jpg')">
</map>
<!-- IMAGEMAP END-->
</div>

<div style="font-family: Arial; font-size: 12px;" align="right">
<p><em>Graphic: CBC Data:UNAIDS</em></p>
</div>


---

## HIV in the UK



<img src="assets/img/ukhiv.png" style="border: 0px;" width="80%">

---

## HIV drug resistance

- HIV treatment has reduced the number of deaths due to HIV
- However, treatment is associated with **acquired drug resistance**
    - Emerges in response to therapy
- At the population level, we also observed **transmitted drug resistance**
  - Individuals are infected with resistant virus

---

## The within-host life cycle of HIV

<img src="assets/img/perelson_1996.png" style="border: 0px;" width="80%">

<div style="font-family: Arial; font-size: 12px;" align="right">
<p><em>Perelson (1996)</em></p>
</div>

---

## Target cells and evolution of resistance

Frost and McLean 1994

---

## Stochastic versus deterministic

- Treatment response varies between individual
- Many biological models are deterministic in nature
  - Model takes the form of differential equations
  - Variability between individuals reflects biological variation
- Variation could arise simply through chance effects

---

## Within-host evolution of M184

<img src="assets/img/m184v.jpg" style="border: 0px;" width="80%">

<div style="font-family: Arial; font-size: 12px;" align="right">
<p><em>Frost et al. J. Virol. 2000</em></p>
</div>

---

## Rise of M184V

<img src="assets/img/m184v_line.jpg" style="border: 0px;" width="80%">

<div style="font-family: Arial; font-size: 12px;" align="right">
<p><em>Frost et al. J. Virol. 2000</em></p>
</div>

---

## Mutation-selection balance

- Genetic drift

---

## Why stochastic?

---

## Within host metapopulation dynamics

<img src="assets/img/metapop.jpg" style="border: 0px;" width="40%">

<div style="font-family: Arial; font-size: 12px;" align="right">
<p><em>Frost et al. PNAS 2001</em></p>
</div>


---

## Model

- Implications:
  - Repeated founder effects result in low effective population sizes

<img src="assets/img/metapop_eqn.gif" style="border: 0px;" width="40%">

- Predictions:
  - There should be fine-scale spatial structure
  - Within subpopulations, there should be evidence of founder effects

---

## Evidence for micro-scale spatial differentiation

<div>
<table frame="hsides" rules="groups" id="table-1">
                           <thead id="thead-1">
                              <tr id="tr-1">
                                 <th rowspan="1" colspan="1" id="th-1">Patient</th>
                                 <th rowspan="1" colspan="1" id="th-2">Number of pulps analyzed</th>
                                 <th rowspan="1" colspan="1" id="th-3">Between-pulp
                                    variation <em>V</em><sub>a</sub></th>
                                 <th rowspan="1" colspan="1" id="th-4">Total variation
                                    <em>V</em><sub>b</sub></th>
                                 <th rowspan="1" colspan="1" id="th-5"><em>F</em><sub>ST</sub>
                                    (⩵<em>V</em><sub>a</sub>/<em>V</em><sub>b</sub>)
                                    
                                 </th>
                              </tr>
                           </thead>
                           <tbody align="center" id="tbody-1" class="table-center">
                              <tr id="tr-2">
                                 <td id="td-1">B</td>
                                 <td id="td-2">3</td>
                                 <td id="td-3">1.453</td>
                                 <td id="td-4">2.446</td>
                                 <td id="td-5">0.594
                                    
                                 </td>
                              </tr>
                              <tr id="tr-3">
                                 <td id="td-6">L</td>
                                 <td id="td-7">4</td>
                                 <td id="td-8">0.836</td>
                                 <td id="td-9">2.266</td>
                                 <td id="td-10">0.369
                                    
                                 </td>
                              </tr>
                              <tr id="tr-4">
                                 <td id="td-11">M</td>
                                 <td id="td-12">2</td>
                                 <td id="td-13">−0.041</td>
                                 <td id="td-14">2.380</td>
                                 <td id="td-15">−0.017<sup>ns</sup></td>
                              </tr>
                              <tr id="tr-5">
                                 <td id="td-16">N</td>
                                 <td id="td-17">2</td>
                                 <td id="td-18">0.055</td>
                                 <td id="td-19">0.706</td>
                                 <td id="td-20">0.078
                                    
                                 </td>
                              </tr>
                              <tr id="tr-6">
                                 <td id="td-21">P</td>
                                 <td id="td-22">5</td>
                                 <td id="td-23">0.463</td>
                                 <td id="td-24">2.154</td>
                                 <td id="td-25">0.215
                                    
                                 </td>
                              </tr>
                              <tr id="tr-7">
                                 <td id="td-26">S</td>
                                 <td id="td-27">4</td>
                                 <td id="td-28">0.146</td>
                                 <td id="td-29">1.629</td>
                                 <td id="td-30">0.090</td>
                              </tr>
                           </tbody>
                        </table>
</div>

---

## Evidence for local founder effects

---

## Transmission and reversion of drug resistance

<img src="assets/img/transmittedresistance.jpg" style="border: 0px;" width="80%">

<div style="font-family: Arial; font-size: 12px;" align="right">
<p><em>Little, Frost et al. J. Virol. (2008)</em></p>
</div>

---

## Reversion of transmitted resistance

<img src="assets/img/k103n.jpg" style="border: 0px;" width="80%">

<div style="font-family: Arial; font-size: 12px;" align="right">
<p><em>Little, Frost et al. J. Virol. (2008)</em></p>
</div>

---

## Resistant mutants are 'fit'

<img src="assets/img/k103rc.jpg" style="border: 0px;" width="80%">

<div style="font-family: Arial; font-size: 12px;" align="right">
<p><em>Little, Frost et al. J. Virol. (2008)</em></p>
</div>

---

## Transmission fitness

---

## Summary

- Acquired resistance can emerge rapidly
  - Pre-existing, but variable, resistant virus
  - Decreasing wild-type viruses results in more target cells, facilitating the emergence of resistance
- Transmitted fitness may revert rapidly
- Given rapid escape and slow reversion, we would expect transmitted resistance to be very common
  - Transmitted resistance is rarer than expected, possibly due to lower transmission rates

---

## Escape from immune responses

- In addition to selection by antiviral agents, there is also selection from the adaptive immune response
  - Humoral (antibody) responses
  - Cellular (cytotoxic T lymphocyte, CTL) responses
- What are the dynamics of escape *within* infected individuals?
- How is this affected by transmission *between* individuals?

---

## Dynamics of antibody responses

<img src="assets/img/abreview.png" style="border: 0px;" width="60%">

<div style="font-family: Arial; font-size: 12px;" align="right">
<p><em>Little, Frost et al. Curr. Opin. HIV AIDS (2008)</em></p>
</div>

---

## Measuring antibody responses

<img src="assets/img/monogram.png" style="border: 0px;" width="80%">

---

## Within-host antibody responses

<img src="assets/img/neut2.png" style="border: 0px;" width="50%">

<div style="font-family: Arial; font-size: 12px;" align="right">
<p><em>Little, Frost et al. PNAS (2005)</em></p>
</div>

---

## Variation between individuals

<img src="assets/img/neut3.png" style="border: 0px;" width="85%">

<div style="font-family: Arial; font-size: 12px;" align="right">
<p><em>Little, Frost et al. PNAS (2005)</em></p>
</div>

---

## Modeling neutralisation escape

<img src="assets/img/modelneut.png" style="border: 0px;" width="50%">

<div style="font-family: Arial; font-size: 12px;" align="right">
<p><em>Little, Frost et al. PNAS (2005)</em></p>
</div>

---

## Cross-reactivity and escape

<img src="assets/img/modelneut2.png" style="border: 0px;" width="85%">

<div style="font-family: Arial; font-size: 12px;" align="right">
<p><em>Little, Frost et al. PNAS (2005)</em></p>
</div>

---

## Population level patterns

- If HIV escapes from the immune system rapidly, how is it recognised at all, decades after its spread?
  - Escape is highly specific

---

## Cellular responses

- Another important arm of the adaptive immune response is the cytotoxic T lymphocyte (CTL) response
- CTLs recognise infected cells, as these cells present viral peptides at their surface
- HIV can escape specific CTL responses through a small number of mutations
- On transmission with an escape mutant:
  - Mutant will revert back to wild type (if mutant is not recognised)
  - Mutant will remain (if mutant is recognised)
- These lead to complex dynamics, depending on the transmission rate

---

## CTL responses and escape

<img src="assets/img/poon2007fig2.png" style="border: 0px;" width="85%">

<div style="font-family: Arial; font-size: 12px;" align="right">
<p><em>Poon et al. PLoS Path 2007</em></p>
</div>

---

## Model predictions

- Evolution at the population level reflects the 'averaging' over multiple individuals
- Variation within the individual is affected by the transmission rate

---

## Conclusions

- Our ability to understand what goes on *within* the HIV infected individual is attributable to increased data
  - Availability of therapy
  - Sequence data
  - Phenotypic data
  - Modeling has moved from being 'data-free' to one which is data-intensive
- HIV evolution and dynamics occurs at the 'front line' within the individual, and variation at the population level reflects averaging over the selection pressures from many hosts


--- ds:cobalt

## Acknowledgements



