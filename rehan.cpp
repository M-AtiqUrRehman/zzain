#include <iostream>
#include <string>
using namespace std;

struct Student {
    int rollNo;
    string name;
    float marks;
};

int main() {
    Student s[50];
    int count = 0;
    int choice;

    do {
        cout << "\n===== Student Record Management System =====\n";
        cout << "1. Add Student\n";
        cout << "2. Display Students\n";
        cout << "3. Search Student (Linear Search)\n";
        cout << "4. Update Student\n";
        cout << "5. Delete Student\n";
        cout << "6. Sort Students by Marks (Bubble Sort)\n";
        cout << "0. Exit\n";
        cout << "Enter choice: ";
        cin >> choice;

        if (choice == 1) {
            if (count < 50) {
                cout << "\nEnter Roll No: ";
                cin >> s[count].rollNo;
                cout << "Enter Name: ";
                cin >> s[count].name;
                cout << "Enter Marks: ";
                cin >> s[count].marks;
                count++;
                cout << "Student Added Successfully!\n";
            } else {
                cout << "Database Full!\n";
            }
        }

        else if (choice == 2) {
            if (count == 0) {
                cout << "\nNo records found!\n";
            } else {
                cout << "\n--- Student List ---\n";
                for (int i = 0; i < count; i++) {
                    cout << "Roll No: " << s[i].rollNo
                         << " | Name: " << s[i].name
                         << " | Marks: " << s[i].marks << endl;
                }
            }
        }

        else if (choice == 3) {
            // --- LINEAR SEARCH ---
            // Checks every element one by one from index 0 to count-1
            int r, found = 0;
            cout << "Enter Roll No to Search: ";
            cin >> r;
            for (int i = 0; i < count; i++) {
                if (s[i].rollNo == r) {
                    cout << "Record Found!\n";
                    cout << "Name: " << s[i].name << " | Marks: " << s[i].marks << endl;
                    found = 1;
                    break; // Exit loop once found
                }
            }
            if (!found) cout << "Student Not Found!\n";
        }

        else if (choice == 4) {
            int r, found = 0;
            cout << "Enter Roll No to Update: ";
            cin >> r;
            for (int i = 0; i < count; i++) {
                if (s[i].rollNo == r) {
                    cout << "Enter New Name: ";
                    cin >> s[i].name;
                    cout << "Enter New Marks: ";
                    cin >> s[i].marks;
                    cout << "Record Updated Successfully!\n";
                    found = 1;
                    break;
                }
            }
            if (!found) cout << "Student Not Found!\n";
        }

        else if (choice == 5) {
            int r, found = 0;
            cout << "Enter Roll No to Delete: ";
            cin >> r;
            for (int i = 0; i < count; i++) {
                if (s[i].rollNo == r) {
                    for (int j = i; j < count - 1; j++) {
                        s[j] = s[j + 1];
                    }
                    count--;
                    cout << "Record Deleted Successfully!\n";
                    found = 1;
                    break;
                }
            }
            if (!found) cout << "Student Not Found!\n";
        }

        else if (choice == 6) {
            // --- BUBBLE SORT ---
            // Compares adjacent elements and swaps them if they are in the wrong order
            if (count < 2) {
                cout << "Not enough students to sort!\n";
            } else {
                for (int i = 0; i < count - 1; i++) {
                    for (int j = 0; j < count - i - 1; j++) {
                        if (s[j].marks > s[j + 1].marks) {
                            // Swap
                            Student temp = s[j];
                            s[j] = s[j + 1];
                            s[j + 1] = temp;
                        }
                    }
                }
                cout << "Students Sorted by Marks (Low to High)!\n";
            }
        }

    } while (choice != 0);

    return 0;
}