import React from "react";
import { Background, Heading1, ProjectImage } from "./elements";
import {
  ProjectDescriptionContainer,
  Description,
  CaseContainer,
  Text1,
  Text2,
  Row,
  Spacer,
  MainProjectImage,
  Heading2,
  Text3,
} from "./elements";
import FadeOverlay from "../../Components/FadeOverlay";
import LazyLoad from "react-lazyload";
import JunctionRow from "../../assets/junctionsRow.png";
import ReadBoard from "../../assets/ReadBoard.png";
import Substrate from "../../assets/Substrate.png";
import Mask from "../../assets/junctions.png";
import InverseMask from "../../assets/inverseMask.png";
import CircuitDiagram from "../../assets/CircuitDiagram.png";
import Photolithography from "../../assets/photolithography.png";
import FourPointMethod from "../../assets/fourPointMethod.png";
import GaussLaw from "../../assets/gausslaw-01.png";
import IntegralOverSpace from "../../assets/integraloverspace-01.png";
import DistanceX from "../../assets/distanceX-01.png";
import PotentialDifference from "../../assets/potentialDifference-01.png";
import OhmsLaw from "../../assets/ohmsLaw-01.png";
import OhmsLawDensity from "../../assets/ohmsLawDensity-01.png";
import GaussOhmsLaw from "../../assets/ohmsLawGaussLaw-01.png";
import Resistivity from "../../assets/resistivity-01.png";
import HeatingControl from "../../assets/heatingControl-01.png";
import PowerVTemp from "../../assets/powerVtemp-01.png";
import Trial1 from "../../assets/Trail1-01.png";
import Trial2 from "../../assets/Trial2-01.png";
import Trial3 from "../../assets/Trail3-01.png";
import IV from "../../assets/IV-01.png";
import Trend from "../../assets/trend-01.png";
import IVvTEMP from "../../assets/IVvTEMP-01.png";
import RvTEMP from "../../assets/RvTEMP-01.png";
import RvTEMP2 from "../../assets/RvTEMP2-01.png";
import RvSEP from "../../assets/RvSEP-01.png";

const Placeholder = () => (
  <div style={{ width: "100%", backgroundColor: "#333333" }}></div>
);

const FabricationController = () => {
  return (
    <>
      <Background />
      <FadeOverlay />
      <LazyLoad placeholder={<Placeholder />}>
        <MainProjectImage src={JunctionRow} />
      </LazyLoad>
      <ProjectDescriptionContainer>
        <Description>Fabricating Silver-Silicon Junctions</Description>
        <Description>Role: Researcher </Description>
        <Description>[2020]</Description>
      </ProjectDescriptionContainer>
      <CaseContainer>
        <Row>
          <Text2>(000)</Text2>
          <Heading1>Abstract</Heading1>
        </Row>
        <Text1>
          This research investigates a simple fabrication method for the making
          of silver-silicon junctions, explores the effects of the contact
          geometries of those junctions on resistance measurements, and analyzes
          silicon resistivity as a function of temperature. The outer silicon
          dioxide layer of a silicon substrate was etched away by hand into
          different contact patterns to expose the interior silicon in order to
          create electrical contacts with a silver pen. Moreover, a PID control
          loop was implemented to regulate the temperature of the silicon
          substrate. These junctions possess neither exclusively ohmic behavior
          nor diode-like behavior; however, at low voltages it behaves like a
          diode and at higher voltages, like a resistor.
        </Text1>
        <Spacer />
        <Row>
          <Text2>(001)</Text2>
          <Heading1>Introduction</Heading1>
        </Row>
        <Heading2>Silver-Silicon Junctions</Heading2>
        <Text1>
          Due to the nature of Silicon (Si), electrical contacts to silicon are
          fabricated in clean rooms. However, we hope to make silicon
          semiconductors available to those who do not have access to a clean
          room by investigating the properties of electrical contacts to silicon
          (silver-silicon junctions) via manual etching. In doing so, we will
          explore the resistive behavior of these junctions. Specifically, we
          are interested in determining whether or not these junctions are ohmic
          -- meaning resistance is constant -- or behave like a diode -- meaning
          current flows easily in one direction of the bias and not in the
          other. Silicon is the most accessible material for semiconductor
          fabrication as it is an abundant, low-cost alternative to germanium
          and gallium arsenide. Pure silicon reacts with oxygen ( O2 ) to form
          an outer layer of silicon dioxide ( Si 02 ) -- also known as silica --
          that insulates and masks the interior silicon [1]. The Deal-Grove
          Model characterizes an oxide layer’s growth on a substrate such as
          silicon. As outlined in their paper, B. E. Deal and A. S. Grove
          propose the relationship to be as follows:xo2 + Axo = B(t + τ) where A
          accounts for the properties of the reaction, B accounts for the
          properties of the oxide layer, τ accounts for the oxide present at t =
          0 , xo denotes thickness, and t denotes time [2]. On average from the
          Deal-Grove Model, the oxide layer will limit itself to a thickness of
          approximately 2 nanometers. During ordinary conditions and given that
          there is no initial oxide present, at t = 15 minutes, enough oxide
          will build up on the silicon substrate that good electrical contact
          cannot be made with the interior silicon.
        </Text1>
        <Heading2>Silicon Properties: Contact Geometry</Heading2>
        <Text1>
          The Van der Pauw technique is a four-point method used for measuring a
          substrate’s resistance [3]. However, this method makes a handful of
          assumptions regarding the geometry of the substrate and its contacts.
          First, this method assumes the substrate is relatively
          two-dimensionally shaped -- meaning it is uniformly flat. Second, the
          substrate must be homogeneous and isotropic. Third, the substrate must
          be solid. Fourth, the electrical contacts must be made on the
          perimeter of the substrate. Additionally, the individual areas of each
          electrical contact should be no greater than one order of magnitude
          smaller than the area of the substrate as a whole. These geometrical
          stipulations allow the Van der Pauw technique to collect average
          resistance measurements over the entire substrate, compared to the
          less general linear four point method which also returns an average
          resistance measurement from the inner two electrical contacts.
          Essentially, the Van der Pauw technique possesses the unique ability
          to measure almost any arbitrary, two-dimensional shape. The importance
          this method places on contact geometry prompts a valid question. How
          would different contact geometries affect the measurable properties of
          a silicon substrate? In investigating this, we hope to determine the
          most effective electrical contact geometry for collecting data on
          silicon resistivity.
        </Text1>
        <Heading2>Silicon Properties: Temperature Dependence</Heading2>
        <Text1>
          Insulators and semiconductors organize their electrons into energy
          bands separated by band gaps -- which are regions in which electrons
          do not inhabit. At low temperatures, each of a crystal’s energy bands
          are either full or empty. There are no free moving electrons.
          Therefore, even if an electric field is applied, little to no
          conduction will take place in a semiconductor like silicon. At high
          temperatures, one or more bands are partially filled. Thus, there are
          ample free moving electrons, allowing conduction to take place.
          Compared to an insulator, semiconductors have a smaller band gap
          between the valence and conduction band, allowing for electrons to be
          more easily thermally excited. However, compared to a conductor, this
          band gap will be larger. Essentially, the resistivity of a pure
          semiconductor, decreases as a function of increasing temperature.
          Resistivity ranges from 10−2 ohm-cm to 109 ohm-cm, where the lower
          resistivities are for doped semiconductors. In the context of our
          research, this means silicon behaves like an insulator at low
          temperatures and a conductor at high temperatures.
        </Text1>
        <Text1>
          In his book, I​ ntroduction to Solid State Physics,​ Charles Kittel
          explains that, the electrical conductivity σ -- within a classical
          kinetic model of electron collisions -- is to be expressed as follows:
          σ = ne2τ/m where τ is collision time, −eEτ/m is the incremental
          velocity between collisions, n is the number of electrons with a
          charge of − e [4]. This is normally applied to metals, although it
          doesn't always work for them. However, for semiconductors, it can
          qualitatively give some insight into the behavior of currents and is a
          somewhat phenomenological model. This is known as the Drude model and
          is consistent with Ohm’s Law which gives the proportal relationship
          between current density, J , and electric field, E , by a factor of
          the conductivity, σ , : J = σE As it relates to silicon
          semiconductors, charge carrier density in the conduction band is the
          most important variable determining its electrical conductivity. This
          property of silicon, like other semiconductors, can be shaped and
          modified via doping, which alters the semiconductor’s perfect crystal
          structure. There are two types of such “extrinsic” semiconductors:
          P-type and N-type. P-type semiconductors possess predominantly
          positively charged holes of missing electrons. N-type semiconductors
          possess predominantly free moving electrons. Conversely, undoped
          semiconductors are categorized as intrinsic semiconductors. We hope to
          compare the curves of intrinsic, p-type, and n-type silicon substrates
          to analyze the temperature dependence of resistance on silicon in its
          many forms.
        </Text1>
        <Row>
          <Text2>(002)</Text2>
          <Heading1>Methods</Heading1>
        </Row>
        <Heading2>Equipment Setup</Heading2>
        <Text1>
          This experiment’s technical setup hinged on a SparkFun Artemis
          RedBoard -- a microcontroller (similar to an Arduino) that
          continuously stores and runs a single program on it. Connected to its
          analog input and power pins, a sensor delivered temperature
          information to the RedBoard. This sensor is more specifically a K-type
          thermocouple (which is composed of a nickel/chromium alloy and a
          nickel aluminum alloy) and amplifier (Adafruit AD8495), adhered
          through MG Chemicals Thermally Conductive Adhesive #8329TCS to a
          Capital Advanced Technologies 6008 Surfboard that was thermally
          greased with MG Chemicals Super Thermal Grease II 8616 and soldered
          onto a copper plated garolite board. Each prepared silicon substrate
          was manually etched and painted with a Chemtronics CW2200STP silver
          pen to create silver-silicon junctions connected to another
          aforementioned surfboard. This board was thermally greased and
          symmetrically soldered onto the same copper plate. Between them, a
          Caddock Electronics MP9100 (20 Ohm, 100 W, 1% tolerance) resistor acts
          as a hotplate. The resistor was connected to a 14602PS DC Power Supply
          through a Vishay Siliconix IRLD024 (N-channel MOSFET) transistor to
          facilitate temperature regulation. This transistor was then connected
          to one of the RedBoard’s specified digital pins. Figure 1.1 shows a
          photo of the microcontroller, thermocouple amplifier board, and heater
          circuit. Figure 1.2 shows the sample, thermocouple, and heater
          resistor.
        </Text1>
        <LazyLoad placeholder={<Placeholder />}>
          <ProjectImage src={ReadBoard} />
        </LazyLoad>
        <Text3>
          Figure 1.1 Pictured are the thermocouple amplifier board,
          microcontroller, and MOSFET from left to right respectively.
        </Text3>
        <LazyLoad placeholder={<Placeholder />}>
          <ProjectImage src={Substrate} />
        </LazyLoad>
        <Text3>
          Figure 1.2 Pictured are the two surfboards symmetrically placed in
          between the heater resistor. On the surfboard in the right is the
          sample and on the surfboard in the left is the thermocouple.
        </Text3>
        <LazyLoad placeholder={<Placeholder />}>
          <ProjectImage src={CircuitDiagram} />
        </LazyLoad>
        <Text3>
          Figure 2. Shows the circuit diagram for the actual measurement
          technology of the 2-point method. Note that the Ohmmeter combines the
          ammeter and the power supply.
        </Text3>
        <Heading2>PID control</Heading2>
        <Text1>
          In regards to the temperature regulation portion of our arduino
          program, our hotplate was initially controlled with a “deadband”.
          Essentially, for any given setpoint, if the sensor reading exceeds the
          setpoint, there is no output to the heater. The range of values within
          which our temperature tries to stay never fully stabilizes with this
          method. The temperature oscillated around the setpoint; the amplitudes
          of these oscillations increased with larger voltages. Thus, a
          proportional-integral-derivative control loop mechanism -- a PID loop
          -- was implemented. This proper PID loop continuously corrected our
          hotplate to a given setpoint with damped oscillations at worst. The
          integral is modeled as the initial integral value plus half the
          quantity of the error plus and the previous error measurement (where
          error is the difference between the actual sensor reading and the
          sensor setting) times the time between readings over the integration
          time scale. The derivative is modeled as the derivative time scale
          times the quantity of the error minus the last error over the time
          between readings. Specifically our PID loop was programmed with a
          proportionality of -6.25 (trials were also conducted at -12.5), an
          integration time scale of 180 seconds (trials were also conducted at
          90 seconds), and a derivative timescale of 30 seconds. A reading was
          set to be taken every 4 seconds. The minimum sensor set point was 700
          counts and the maximum sensor set point was 800 counts which equal
          temperatures of 23.7 and 62.8 degrees celsius respectively.
        </Text1>
        <Text1>
          Further we utilize a pulse width modulation (PWM) arduino software
          [5]. Effectively, this is a means of analog output through digital
          methods. Digital control creates a square wave pattern which denotes
          the on and off state of a signal. The PWM wave pattern can stimulate
          voltages in between full on and off . The scale ranges from 0 to 255.
          It does this by modifying the interval of time the signal is on (this
          is the pulse width) and the interval of time the signal is off. The
          PWM used for the deadband control was set to 127, which calls for a
          50% duty cycle. This means the signal was on for half the time cycle
          and off for the other half of the time cycle. However for the PID loop
          control, the PWM setting depended on how much heating power was needed
          -- so it could range anywhere from 0 to 255.
        </Text1>
        <Text1>
          Essentially, our arduino program -- through a PID loop and PWM --
          controls the heater with a higher level of precision in calculating
          the voltage needed to remain within a given temperature set point. The
          heater switches between on and off as it fluctuates in and out of
          range until stabilizing at a constant temperature.
        </Text1>
        <Heading2>Samples</Heading2>
        <Text1>
          Only N-type, phosphorous doped, 525+/-25 micrometers thick, and
          580-840 Ohm-cm resistivity silicon wafers were used in this
          experiment. Intrinsic, P-type, and N-type silicon wafers were obtained
          for use in the clean room, but due to unforeseen limitations, we could
          not access the clean room. Therefore the following circular silicon
          wafers were left unused, however originally intended for the purposes
          of this experiment: 1 intrinsic 100 mm diameter, [100] orientation,
          20,000 ohm-cm resistance, and .525 mm thick wafer, 1 P-type 100 mm
          diameter, [100] orientation, 10-20 ohm-cm resistance, and .500 mm
          thick wafer, and 1 N-type 100 mm diameter, [100] orientation, 10-20
          ohm-cm resistance, and 1.000 mm thick wafer.
        </Text1>
        <Text1>
          As demonstrated by the Van der Pauw method, contact geometry matters.
          Therefore, three different contact arrangements were planned on a
          considerably 2-dimensional, rectangularly shaped silicon substrate.
          The first arrangement possessed a linear 4 point geometry. The second
          arrangement resembled that of a coaxial cable. The third arrangement
          possessed a row of 8, vertical rectangles. Moreover, these three
          geometries appear in Figures ​4.1, 4.2, 5.1, and 5.2 in the section on
          m​ ask design​. The original intention was to test these contact
          geometries using intrinsic, P-type, and N-type silicon; however, as
          previously mentioned, only N-type silicon was accessible for testing
          at this time.
        </Text1>
        <Heading2>Clean room preparation</Heading2>
        <Text1>
          In the event that a clean room was accessible, our methods in regards
          to the preparation of clean room fabrication would have consisted of
          two main processes: Photolithography and Sputtering [6].
          Photolithography effectively serves to print a pattern using a
          photosensitive material and exposure to light -- typically UV light,
          but in some cases x-rays or electrons are used. The UV light would
          shine through a mask onto a layer of photoresist that covers the
          uniformly flat silicon substrate. A process of positive photoresist
          would have been employed for the purposes of this experiment. Positive
          photoresist breaks down the chemical bonds that are exposed to light,
          while negative photoresist hardens the chemical bonds that are exposed
          to light. This requires a mask which generally consists of chromium
          and glass. Our mask was going to be a dark print onto a plastic sheet
          from www.outputcity.com’s CAD/Art Services. Moreover, chromium
          possesses a considerably higher opacity than glass in regards to UV
          light, so it is used to mask the portions of the oxide layer that is
          to be kept. Conversely, the portions of the mask constituted by
          exclusively glass, will reveal the portions of the oxide to be
          stripped away. The chromium is represented with the color pink and the
          glass represented as negative space in Figure 3 part (c).
          Subsequently, the chemical bonds within the photoresist when exposed
          to UV light (i.e. those under exclusively glass) will break apart,
          exposing the portions of silicon oxide that are to be removed. The
          entire substrate is then plunged into a bath of hydrofluoric acid.
          This etches away the exposed silicon oxide while the silicon oxide
          layer enclosed in and protected by the photoresist remains to hold the
          shape of the well. In order to remove the remaining photoresist and
          expose the remaining silicon oxide, the substrate is washed with a
          solvent. Figure 3 part (d) shows this final step of the
          photolithography process.
        </Text1>
        <LazyLoad placeholder={<Placeholder />}>
          <ProjectImage src={Photolithography} />
        </LazyLoad>
        <Text3>
          Figure 3. Basic rendering of Photolithography and Sputtering
          processes: (a) A silicon substrate is obtained. The lighter blue
          outline denotes the oxide layer. (b) A layer of photoresist is added
          (c) A mask is used to expose the segments of the photoresist under
          which lie unwanted oxide. (d) Oxide is etched away. (e) A photoresist
          solvent is applied. (f) Gold or silver is sputtered into the wells to
          create contacts with the silicon.
        </Text3>
        <Text1>
          Within 15 minutes of the completion of the photolithography process
          (to avoid regrowth of the oxide layer) a process called chemical vapor
          deposition (CVD) would take place. This process, more specifically
          referred to as sputtering, is conducted in a high vacuum chamber. Gold
          or silver (depending on the trial) would then be placed above the
          substrate. A plasma of argon would be created and accelerate its ions
          towards the gold or silver. This process begins to displace atoms of
          gold and silver and deposit them into the remaining wells in the
          silicon oxide layer. Effectively, this would replicate the industry
          standard for making contacts with silicon. Figure 3 part (f) shows
          these resulting gold/silver-silicon junctions.
        </Text1>
        <Heading2>Mask Design</Heading2>
        <Text1>
          A computer aided design (CAD) software program is necessary for
          photolithography mask fabrication. A CAD program essentially takes the
          data of a 2 dimensional design living in digital space, and realizes
          it into physical space. Specifically, Adobe Illustrator was the CAD
          program employed to manifest the precise specifications of our masks
          as seen in Figures 4.1 and 4.2. These designs were exported from Adobe
          Illustrator as an .eps file. Note that we avoided .dxf files as they
          tend to drop data because .dxf files are not the main priority output
          for Adobe Illustrator.
        </Text1>
        <LazyLoad placeholder={<Placeholder />}>
          <ProjectImage src={Mask} />
        </LazyLoad>
        <Text3>Figure 4.1 Pictured is the 4 inch diameter wafer mask.</Text3>
        <LazyLoad placeholder={<Placeholder />}>
          <ProjectImage src={InverseMask} />
        </LazyLoad>
        <Text3>
          Figure 4.2 Pictured is the 4 inch diameter wafer inverse mask.
        </Text3>
        <Text1>
          Notice that Figure 4.1 and 4.2 are near inverses of each other. This
          was done intentionally so that multiple trials of photolithography and
          sputtering could be conducted on the same wafer. The first resist
          would create locations for gold electrodes to be sputtered in the
          clean room while the second resist is a negative resist and would
          create the locations for the silver pen electrodes at the dark regions
          of the mask. The hydrofluoric acid dip would etch those spots and give
          a few minutes to apply the silver pen. This would allow for two kinds
          of metal-silicon junctions at various contact points. Specifically, we
          would have wanted to create both gold-silicon junctions and
          silver-silicon junctions.
        </Text1>
        <Text1>
          Moreover, these designs were laid out in configurations such that it
          would facilitate the wafer cutting process. Once, contacts would have
          successfully been created in the clean room onto each of these wafers,
          each one would need to be cut into a sample. Issues arise because the
          cutting of each sample can only be performed along complete axes of
          the wafer due to its crystal structure. Moreover, the cuts can be
          fairly unpredictable along the edges of the wafer. With these
          stipulations in mind, the masks were designed with a proportionally
          sized buffer at the perimeter of each wafer. In regards to the 4 inch
          diameter wafer, we had a working space of a 3 inch in diameter,
          interior, circular region, and in regards to the 2 inch diameter
          wafer, we had a working space of a 1.5 inch in diameter, interior,
          circular wafer. Further, each segment of specific sample contact
          geometry was configured along predetermined cutting axises in a
          grid-like structure.
        </Text1>
        <Heading2>Four-point Method</Heading2>
        <Text1>
          A four-point probes method was planned for all three contact
          arrangements to measure the bulk properties of silicon. Essentially,
          this method connects an ammeter to the outer contacts (to measure the
          current) and a voltmeter on the inner two contacts (to measure the
          potential difference).
        </Text1>
        <LazyLoad placeholder={<Placeholder />}>
          <ProjectImage src={FourPointMethod} />
        </LazyLoad>
        <Text3>Figure 5. Shows a circuit diagram for the 4-point method.</Text3>
        <Text1>
          This method eliminates both contact resistance and lead resistance
          from the measurements. During a four-point measurement, the current
          leads supply the circuit with a current which generates a potential
          difference determined by Ohm’s Law. Using Ohm’s Law and Gauss’ Law,
          resistivity equations for each of the contact geometries can be
          derived, provided a four-point measurement is employed. However, it is
          important to note that we do not consider these 4 contact points, as
          points on the surface of the substrate. A model of infinitely long
          wires is being analyzed with all of three-dimensional space in between
          filled with the resistive material. In this model, the current is
          entirely two-dimensional.
        </Text1>
        <Text1>Given Gauss’ Law we have:</Text1>
        <LazyLoad placeholder={<Placeholder />}>
          <ProjectImage src={GaussLaw} />
        </LazyLoad>
        <Text1>
          This equation models the electric field a distance r away from an
          infinite wire. Therefore we can find the potential difference between
          any points some distance x away in space with the following integral
          over space:
        </Text1>
        <LazyLoad placeholder={<Placeholder />}>
          <ProjectImage src={IntegralOverSpace} />
        </LazyLoad>
        <Text1>
          From this an equation for the potential difference between point A and
          B can be derived given that the spacing between the wire, point A, and
          point B are all equal. This spacing will be represented as the
          distance x .
        </Text1>
        <LazyLoad placeholder={<Placeholder />}>
          <ProjectImage src={DistanceX} />
        </LazyLoad>
        <Text1>
          Suppose, we add a second wire such that the first wire, point a, point
          b, and the second wire are all equally spaced apart respectively in a
          linear four-point-like fashion. One wire carries + Q/L and the other
          carries − Q/L . The potential difference between point a and b is now:
        </Text1>
        <LazyLoad placeholder={<Placeholder />}>
          <ProjectImage src={PotentialDifference} />
        </LazyLoad>
        <Text1>Given Ohm’s Law we have:</Text1>
        <LazyLoad placeholder={<Placeholder />}>
          <ProjectImage src={OhmsLaw} />
        </LazyLoad>
        <Text1>
          This states that the electric field is proportional to the density of
          the current where the proportionality is conductivity. Given that the
          density of the current of the first wire equals the current over the
          unit area we have:
        </Text1>
        <LazyLoad placeholder={<Placeholder />}>
          <ProjectImage src={OhmsLawDensity} />
        </LazyLoad>
        <Text1>Revisiting Gauss’ Law:</Text1>
        <LazyLoad placeholder={<Placeholder />}>
          <ProjectImage src={GaussOhmsLaw} />
        </LazyLoad>
        <Text1>
          Making the previous substitution in our 2 wire 2 point Gaussian
          result, the potential difference between points A and B can be
          derived, and thus so can the resistivity 1/σ :
        </Text1>
        <LazyLoad placeholder={<Placeholder />}>
          <ProjectImage src={Resistivity} />
        </LazyLoad>
        <Text1>
          This equation is a reasonable resistance approximation for first
          contact arrangement which possessed a linear 4 point geometry. Through
          the same logic, resistance approximations for the second and third
          contact arrangements -- which possessed a coaxial cable-like geometry
          and a row of 8, vertical rectangles respectively -- can be deduced.
        </Text1>
        <Row>
          <Text2>(003)</Text2>
          <Heading1>Results and Discussion</Heading1>
        </Row>
        <Heading2>Heating Control</Heading2>
        <Text1>
          The effectiveness of our deadband control was tested first. For this
          first collection of data, the temperature of the sample was set to a
          setpoint of 760 counts which is roughly 48 degree celsius. Keeping in
          mind that heating power = I 2 R , Figure 6 shows the three trials
          conducted at 10 volts, 14 volts, and 20 volts. Each of these trials
          ran at 20 ohms and .5 amps, .7 amps, and 1 amp respectively through
          our circuit. With the pulse width modulation set to half, the average
          current was .25 amps, .35 amps, and .5 amps respectively.
        </Text1>
        <LazyLoad placeholder={<Placeholder />}>
          <ProjectImage src={HeatingControl} />
        </LazyLoad>
        <Text3>
          Figure 6. The deadband is set to roughly 48 degrees celsius.
        </Text3>
        <Text1>
          Our resulting data is littered with fluctuations. As voltage increased
          from trial 1 to 3, the number of fluctuations and oscillations grew.
          We attribute the lack of stabilization to the overshooting of our
          heating mechanism. Therefore, our deadband control was not effective
          enough. Moreover, trial 1 at 10 volts did not supply the silicon
          substrate with enough heating power to even reach the range.
        </Text1>
        <Text1>
          To further understand the relationship between heating power and
          accessible temperature ranges, we ignored the deadband control
          completely and ran 4 trials conductedat 4, 6, 8, and 10 volts. The DC
          power supply was simply turned on directly to the heater resistor
          which entirely bypassed the transistor.
        </Text1>
        <LazyLoad placeholder={<Placeholder />}>
          <ProjectImage src={PowerVTemp} />
        </LazyLoad>
        <Text3>
          Figure 7. Shows relationship between heating power (derived from
          applied DC voltage) and accessible temperature ranges.
        </Text3>
        <Text1>
          There was no control for the data in Figure 7. It shows that the
          maximum temperature for a 4 volt DC power supply is approaching a
          limiting value of around 30 degrees celsius, a 6 volt DC power supply
          is approaching a limiting value of around 40 degrees celsius, an 8
          volt DC power supply is approaching a limiting value of around 55
          degrees celsius, and a 10 volt DC power supply is approaching a
          limiting value of around 65 degrees celsius. Compared to the deadband
          control in Figure 6, which had a PWM set to half, we must
          contextualize these temperatures for which pulse width modulation was
          not employed. Given that heating power = IV , the temperature values
          in each trial shown in Figure 8 must be halved in order to be properly
          compared to those in Figure 6. Thus, the 10 volt case in Figure 7 can
          be approximated to the 14 volt deadband control case in Figure 6.
          Moreover, 10 volts on the power supply are necessary to get a full
          range.
        </Text1>
        <Text1>
          In order to better the heating mechanism, the effectiveness of a
          proper PID loop was tested as shown in Figure 8.1, 8.2, and 8.3. The
          heating voltage was set to 10 volts and the PWM was set to 100%, thus
          this data can be directly compared with that of Figure 7. Three trials
          ran at a proportionality of -6.25, -6.25, and -12.25 respectively,
          with an integration time of 180, 90, and 90 seconds respectively, and
          a derivative time of 30 seconds each. The proportionality relates the
          PID loop calculation to the setting of the PWM. During each of these
          three trials the setpoint will change from 700 counts (24 degrees
          celsius), to 720 counts (32 degrees celsius), and then back to 700
          counts again.
        </Text1>
        <LazyLoad placeholder={<Placeholder />}>
          <ProjectImage src={Trial1} />
        </LazyLoad>
        <Text3>
          Figure 8.1. Trial 1 has a proportionality of k = -6.5, and integration
          time of 180 seconds, and a derivation time of 30 seconds.
        </Text3>
        <LazyLoad placeholder={<Placeholder />}>
          <ProjectImage src={Trial2} />
        </LazyLoad>
        <Text3>
          Figure 8.2. Trial 2 has a proportionality of k = -6.5, and integration
          time of 90 seconds, and a derivation time of 30 seconds.
        </Text3>
        <LazyLoad placeholder={<Placeholder />}>
          <ProjectImage src={Trial3} />
        </LazyLoad>
        <Text3>
          Figure 8.3. Trial 3 has a proportionality of k = -12.5, and
          integration time of 90 seconds, and a derivation time of 30 seconds.
        </Text3>
        <Text1>
          The oscillations within the deadband should go away if the PID loop is
          operating properly. Figure 8.1, 8.2, and 8.3 show that depending on
          different parameters under damping (when the temperature overshoots
          the range and oscillates) and over damping (when the temperature
          approaches the setpoint without oscillating) can occur while the PID
          loop is adjusting to the new temperature set point. Moreover, critical
          damping is the case where settling takes the least amount of time.
          Essentially, the temperature exceeds the setpoint only once in the
          case of critical damping and then stabilizes with no further
          oscillation. In Figure 8, the PID loop adjusts to a temperature
          increase and subsequent temperature drop (critical damping); however
          the response to the increase differs from the response to the drop. It
          seems the step down in temperature has a greater amplitude of
          oscillation and takes longer to settle than the step up. We attribute
          this to the fact that our electrical system consists of a heater and
          no cooler. It follows that once the pulse width modulator goes to zero
          the heater turns off. It is only after the temperature falls below a
          given set point, the heater turns back on again. Ultimately, Figure 7
          provides clear evidence that this is the superior heating control
          system.
        </Text1>
        <Heading2>Resistance at High Voltages</Heading2>
        <Text1>
          Subsequently the current-voltage (I-V) relationship of the Si sample
          was tested at room temperature. An ammeter that can measure current
          less than 1 nanoamp was employed. Two trials were conducted: one for
          positive voltages and one for negative voltages.
        </Text1>
        <LazyLoad placeholder={<Placeholder />}>
          <ProjectImage src={IV} />
        </LazyLoad>
        <Text3>
          Figure 9.1. Shows the current-voltage (I-V) relationship of the Si
          sample at a constant temperature. The horizontal axis voltage (voltes)
          and the vertical axis is current (amps).
        </Text3>
        <Text1>
          From the I-V relationship shown in Figure 9.1, we can deduce that the
          curve at small voltages is similar to that of a sort of diode-like
          junction and the more linear, or ohmic, behavior at higher voltages is
          like that of a resistor. Furthermore, the data at negative and
          positive voltages are not symmetric. There is little reverse bias and
          it breaks down early. It is reasonable to assume that at smaller
          voltages Figure 9.1 is representative of contact resistance. Moreover,
          at higher voltages representative of the resistive properties of the
          bulk silicon. It follows that the inverse of the slope at large
          voltages, specifically those larger than 6 volts, models the
          resistance of the silicon sample.
        </Text1>
        <LazyLoad placeholder={<Placeholder />}>
          <ProjectImage src={Trend} />
        </LazyLoad>
        <Text3>
          Figure 9.2 isolates data from Figure 8.1 at 6 volts or higher with the
          addition of a trendline.
        </Text3>
        <Text1>
          The trendline from Figure 9.2 is I(V ) = (1.6e − 05 * v) − 5.8E − 05.
          From this I-V relationship characteristic of room temperature, we
          extract a bulk si resistance of 6E4 ohms, or 60 kOhms. Given that the
          substrate has dimensions of 1.016 cm by .3 cm by .05 cm, this gives a
          resistivity of 885.826 Ohm-cm at room temperature. This is within just
          high of the specified range of the known resistivity of the substrate
          which is 580 to 840 Ohm-cm. However, we want to explore the
          relationship of how resistance varies as a function of temperature. To
          do this, data on the I-V characteristics of our silicon sample at
          different voltages that correspond to different temperatures was
          taken. The data from the PID loop was condensed into two readings per
          trial. The temperature sensor took 1 reading when the PID loop had
          settled and the I-V data began collecting and 1 reading when the I-V
          data stopped collecting. The PID loop was turned off during data
          collection.
        </Text1>
        <LazyLoad placeholder={<Placeholder />}>
          <ProjectImage src={IVvTEMP} />
        </LazyLoad>
        <Text3>
          Figure 10.1 Shows how IV curves vary with temperature. The voltage at
          each of these intervals are 0.2, 0.6, 1.0, 1.5, 2.0, 3.5, 5.0, 6.0,
          6.5, 7.0, 7.5, and 8.0 respectively.
        </Text3>
        <Text1>
          The slope (dI/dV) of Figure 10.1 at higher voltages varies
          significantly between separate trials of increasing temperature. In
          order to see this change, we graphed the resistance from the inverse
          of the slope of each of each trial’s trendline at higher voltages.
        </Text1>
        <LazyLoad placeholder={<Placeholder />}>
          <ProjectImage src={RvTEMP} />
        </LazyLoad>
        <Text3>
          Figure 10.2. Shows how the resistances derived from Figure 10.1 vary
          with temperature.
        </Text3>
        <Text1>
          We can compare how resistance varied as a function of temperature in
          Figure 10.2 to those taken from an ohmmeter. Using a B&K Precision
          5492B Bench Digital Multimeter we can directly measure the resistance.
          For this data, the PID control loop was set to 800 counts, or 62.8
          degrees celsius, however the temperature started out low at a sensor
          reading of 700 counts, or 23.7 degrees, in order to produce a steadily
          increasing temperature. The resistance of the silicon sample was then
          collected from the multimeter set to the ohmmeter setting.
        </Text1>
        <LazyLoad placeholder={<Placeholder />}>
          <ProjectImage src={RvTEMP2} />
        </LazyLoad>
        <Text3>
          Figure 11. Shows the direct resistance measurements from the
          multimeter as a function of temperature.
        </Text3>
        <Text1>
          As previously mentioned, the resistivity of a pure semiconductor,
          decreases as a function of increasing temperature due to the amount of
          electrons available in the conduction band. Figure 11 Provides clear
          evidence for this inverse relationship between resistance and
          temperature of silicon. We attribute the differences in resistance as
          a function of temperatures measurements between Figure 10.2 and Figure
          11 through employed voltage. The resistance measured in Figure 10.2
          includes contact resistance because it employs a low voltage, whereas
          in Figure 11 we are only employing voltages above 6 volts thus
          isolating the bulk resistance. Moreover, we know that our sample is
          not an intrinsic semiconductor. We used N-type, phosphorus doped
          silicon which has a known resistivity specified to be between 580 and
          840 Ohm-cm. In order to contextualize this given resistance-length
          information with our observed resistance-temperature data, we must
          investigate resistance as a function of distance.
        </Text1>
        <Heading2>Length Dependence of Resistance</Heading2>
        <Text1>
          To investigate length dependence, a 5-contact sample was constructed.
          Resistance measurements were collected between contacts 1 and 5 (which
          are separated by 4 units of length), between contacts 1 and 4 (which
          are separated by 3 units of length), between contacts 2 and 4 (which
          are separated by 2 units of length), and between contact 1 and 2
          (which are separated by 1 unit of length). While the original sample
          has a known resistivity of 580-840 Ohm-cm, this sample has an unknown,
          lower resistivity and unknown doping.
        </Text1>
        <LazyLoad placeholder={<Placeholder />}>
          <ProjectImage src={RvSEP} />
        </LazyLoad>
        <Text3>
          Figure 12. Shows resistance as a function of unit length separation.
        </Text3>
        <Text1>
          Explicitly this shows the current as a function of voltage with
          respect to different units of length separation. Essentially, one over
          the slope of each trendline at voltages larger than 6, gives the
          resistances at each length separation. ​The largest length separation
          between contacts shown in blue in Figure 12, should have the largest
          resistance and therefore the smallest slope. Thus there is a length
          dependence. It follows that the silver-silicon junctions of this
          5-contact sample have diode-like properties but also resistive
          properties. As shown in Figure 13. There is a clear trend of
          increasing resistance as the length of silicon between the contacts
          increases. This data bolsters our interpretation of the behavior of
          the curve at larger voltages being controlled by the bulk silicon
          properties.
        </Text1>
        <Heading2>Errors, Improvements and Limitations</Heading2>
        <Text1>
          Unfortunately, the covid-19 global pandemic prevented us from taking
          our research into the clean room. We had no industry standard with
          which we could compare the effectiveness of our simple silver-silicon
          junction fabrication method. Had we had this luxury, we would have
          been able to calculate the degree to which the effectiveness of our
          contacts deviate from the industry standard.
        </Text1>
        <Text1>
          Moreover, there was a discrepancy between the resistance as determined
          by the slope of the IV curve and the resistance measured by the
          ohmmeter in Figure 10.2 and Figure 11 respectively. Essentially, this
          is because the data in Figure 10.2 was collected at significantly
          smaller voltages than Figure 11. It follows that determining the slope
          via an IV curve includes the contact resistance, whereas direct
          resistance measurements are a better gauge of bulk resistance
          properties. A good way to visualize this differing behavior in
          resistance as a function of voltage is to refer back to Figure 10.1
          which shows that at low voltages the contacts possessed the behavior
          of a diode and at higher voltages, that of a resistor. In this same
          vein, these resistive discrepancies specifically, as well as our
          measurements as a whole, would have benefited from the successful
          employment of the 4-point probe method. Instead we exclusively used a
          2-point method. The 4-point probe method would have removed contact
          resistance from our measurements entirely, allowing us to better
          isolate bulk resistance properties of silicon. Moreover, our research
          found a calculated resistivity of the sample based on the specified
          resistance at room temperature to be 885.826 Ohm-cm. This value lives
          just above the higher bound of the given resistivity range for the
          substrate.
        </Text1>
        <Row>
          <Text2>(004)</Text2>
          <Heading1>Conclusions</Heading1>
        </Row>
        <Text1>
          In regards to our heating system, the PID loop was ultimately the
          superior system to deadband control. Deadband control was found to
          oscillate around a set point with increasing voltages whereas the PID
          loop control settled into its range through a short period of critical
          damping. Furthermore, the photo masks were designed in the CAD
          software, Adobe Illustrator, and subsequently inverted. ​This was done
          so that the first step (utilizing the first mask) of photolithography
          (which employed positive resist) and sputtering could fabricate gold
          contacts followed by the second step (utilizing the second, inverse
          mask) of photolithography (which employed negative resist) could
          fabricate locations where silver pens would create the final
          electrode.
        </Text1>
        <Text1>
          Ultimately, this experiment found silver-silicon junctions to possess
          neither exclusively ohmic behavior nor diode-like behavior. Instead,
          at low voltages the contacts possessed the behavior of a diode and at
          higher voltages, that of a resistor. Specifically, we focused on the
          IV characteristics of the silicon substrate at large voltages. At
          applied voltages above 6 volts, the linearity of the IV relationship
          implies a holistic ohmic behavior of the substrate. Moreover, from
          this ohmic behavior, a temperature dependent resistance was derived
          from the inverse of the slope of the IV curve. As expected for a
          semiconductor, resistance, and therefore resistivity, decreased with
          increasing temperature. Finally, there exists a length dependence on
          resistance. As length increases, so does the resistivity at higher
          voltages. This evidence leads us to conclude that the behavior of the
          IV curve at larger voltages are determined by the bulk silicon
          properties.
        </Text1>
        <Text1>
          In the future, it would greatly benefit our research to utilize the
          cleanroom so that we could have an industry standard with which to
          compare our data. This would also have allowed us to employ the use of
          our masks that would create more dynamic geometries with which we
          could conduct more trials to derive the resistivity of silicon.
          Further, the successful implementation of a 4-point method, would have
          allowed for more accurate resistance measurements at lower voltages,
          as there would be no contributions from contact resistance.
        </Text1>
        <Row>
          <Text2>(005)</Text2>
          <Heading1>Acknowledgements</Heading1>
        </Row>
        <Text1>
          1. Tsuneyuki Yamane, Naoto Nagai, Shin-ichiro Katayama, and Minoru
          Todoki, Journal of Applied Physics 91, 9772 (2002)
        </Text1>
        <Text1>
          2. B.E. Deal and A.S. Grove, Journal of Applied Physics ​36​, 3770
          (1965).
        </Text1>
        <Text1>
          3. Heaney, Michael B. “Electrical Conductivity and Resistivity.”
          Electrical Measurement, Signal Processing, and Displays. Ed. John G.
          Webster. CRC Press, 2003. 7-1.
        </Text1>
        <Text1>
          4. Kittel, Charles. Introduction to Solid State Physics. Wiley, 1986.
        </Text1>
        <Text1>
          5. Hirzel, Timothy. “PWM.” ​Arduino​,
          ​www.arduino.cc/en/tutorial/PWM​.
        </Text1>
        <Text1>
          6. Banks, Danny. Microengineering, MEMS, and Interfacing: a Practical
          Guide. CRC Press, 2006.
        </Text1>
      </CaseContainer>
      <Spacer />
    </>
  );
};

export default FabricationController;
