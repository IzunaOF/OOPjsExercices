// class Ponto: def init (self, x, y): 
// self.x = x self.y = y 
// class Retangulo: def init (self, canto1, canto2): 
// self.canto1 = canto1 
// self.canto2 = canto2 
// def centro(self):
//  x_centro = (self.canto1.x + self.canto2.x) / 2.0 y_centro = (self.canto1.y + self.canto2.y) / 2.0 return "X=" + str(x_centro) + "Y=" + str(y_centro) 
//  x1 = float(input("entre a coordenada x do canto inferior esquerdo: ")) 
//  y1 = float(input("entre a coordenada y do canto inferior esquerdo: ")) 
//  canto1 = Ponto(x1, y1) 
//  x2 = float(input("entre a coordenada x do canto superior direito: ")) 
//  y2 = float(input("entre a coordenada y do canto superior direito: ")) 
//  canto2 = Ponto(x2, y2) 
//  ret = Retangulo(canto1, canto2) 
//  print ("Ponto central e %s" % ret.centro()) 
 class Ponto {
 private float x; 
 private float y; 

 public Ponto(float x, float y){
  this.x = x; this.y = y;
 }

  public float getx() {return x;}; 
  public float gety(){ return y;}; 
}

class Retangulo1 {
Ponto c1, c2;
float x_centro, y_centro; 
public Retangulo1(Ponto canto1, Ponto canto2) {
c1 = canto1;
c2 = canto2;
}
public String centro() {
x_centro = (c1.getx() + c2.getx())/2; 
y_centro = (c1.gety() + c2.gety())/2; 


return "X = " + x_centro + "Y =" +y_centro;
};
public String tostring(){
    public static void main(string[] args) ;
    return "Retangulo1 [c1=" + c1 + ", c2=" + c2 + ", x_centro=" + x_centro + ", y_centro=" + y_centro + "]";

};
}




Ponto p1 = new Ponto(10,20);
Ponto p2 = new Ponto(20,50); 

Retangulo1 r = new Retangulo1(p1,p2); 
System.out.println(r.centro());