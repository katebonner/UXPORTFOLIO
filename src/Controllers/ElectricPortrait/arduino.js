export const arduinoCodeString = `
#include <CapacitiveSensor.h>
CapacitiveSensor capSensor = CapacitiveSensor(4, 2);

int threshold = 100;
const int speaker = 12;

void setup() {
  Serial.begin(9600);
  pinMode(speaker, OUTPUT);
}

void loop(){
  long sensorValue = capSensor.capacitiveSensor(30);
  Serial.println(sensorValue);

  if (sensorValue > threshold){
    tone(speaker, 1000); 
  }
  else{
    noTone(speaker);  
  }
  delay(10);
}
`;
