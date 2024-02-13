#include<stdio.h>
#include<string.h>
int main(){
    char s[10000];
    int k = 0;
    while(1){
        scanf("%c",&s[k]);
        k++;
        if(s[k-1]==' '){
            s[k-1]='\0';
            break;
        }
    }
    int a;
    scanf("%d",&a);
    int sum = 0;
    int b = a;
    for(int i=strlen(s)-1;i>=0;i--){
        if(s[i]>='0' && s[i]<='9'){
            int q = s[i]-'0';
            sum+=q*a;
        }
        else{
            int q = s[i]-'A';
            sum+=q*a;
        }
        a*=b;
    }
    printf("%d",sum);
}