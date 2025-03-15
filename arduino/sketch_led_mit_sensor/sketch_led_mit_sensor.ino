
int ledpin = 9;
int ldrpin = A0;
int ldrmax = 0;
int ldrmin = 1023;

void setup() {
  // put your setup code here, to run once:
  pinMode(ledpin, OUTPUT);
  Serial.begin(9600);

}

void loop() {
  // put your main code here, to run repeatedly:
  int potivalue = analogRead(ldrpin);
  Serial.println(potivalue);
  int mappedvalue = potivalue / 4;
  int mappedvalue_2 = map(potivalue, 0, 1023, 0, 255); 
  analogWrite(ledpin, mappedvalue);

  

}
