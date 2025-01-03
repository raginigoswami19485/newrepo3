#include <bits/stdc++.h>
using namespace std;
void rev (string str)
   { 
for(int i=0;i<5/2;++i)
{
 
 char temp;
 temp=str[i];
str[i]=str[5-i-1];
 str[5-i-1]=temp;
    
}
for(int i=0;i<5/2;++i){
    
    cout<<str[i];
}
   int main() {
    string str="hello";
    rev(str);
    
}
    // // Using reverse() function to reverse s
    // reverse(s.begin(), s.end());

}  
