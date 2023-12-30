#include <iostream>
using namespace std;
class Account{
    int id;
    string name;
    int balance;
public:
    //constructors
    Account(){
        id=0;
        name="";
        balance=0;
    }

    Account(int a, string n, int b){
        id=a;
        name=n;
        balance=b;
    }

    Account(const Account &obj){
        id=obj.id;
        name=obj.name;
        balance=obj.balance;
    }

    //setters
    void setId(int a){
        id=a;
    }

    void setName(string n){
    name=n;
    }

    void setBalance(int b){
    balance =b;
    }

    //getters
    int getId(){return id;}
    string getName(){return name;}
    int getBalance(){return balance;}

    //methods
    void printInfo(){
        cout<<"id: "<<id<<" "<<"Name: "<<name<<" "<<"Balance: "<<balance<<endl;
    }

    void TransferTo(Account &obj, int b){
        balance-=b;
        obj.balance+=b;
    }
};
int main()
{
Account a(1,"name",1000);
Account b(a);
a.TransferTo(b,200);
a.printInfo(); // balance = 800
b.printInfo(); // balance = 1200
}
