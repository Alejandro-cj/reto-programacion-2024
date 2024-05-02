
#include <stdio.h>
#include <time.h>

#define MIN 0
#define MAX 100

void generador();

int main(int argc, char const *argv[])
{
    generador();
    return 0;
}

void generador()
{
    int n = time(NULL);
    int random = (n % MAX) + MIN;

    printf("The random number is: %d\n", random);
}
