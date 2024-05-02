
#include <stdio.h>
#include <time.h>

int pseudoaleatorio(void); 

int main()
{
    printf("%i",pseudoaleatorio());
    return 0;
}


int pseudoaleatorio()
{
    int numero = time(NULL);
    numero = numero*25184;
    return numero%101;
}


