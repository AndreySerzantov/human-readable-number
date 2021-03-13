module.exports = function toReadable (number) {
    num = num.toString();
    let str = '';
    let one = 'one',
        two = 'two',
        three = 'three',
        four = 'four',
        five = 'five',
        six = 'six',
        seven = 'seven',
        eight = 'eight',
        nine = 'nine',
        ten = 'ten',
        eleven = 'eleven',
        twelve = 'twelve',
        thirteen = 'thirteen',
        fourteen = 'fourteen',
        fifteen = 'fifteen',
        sixteen = 'sixteen',
        seventeen = 'seventeen',
        eighteen = 'eighteen',
        nineteen = 'nineteen',
        twenty = 'twenty',
        thirty = 'thirty',
        forty = 'forty',
        fifty = 'fifty',
        sixty = 'sixty',
        seventy = 'seventy',
        eighty = 'eighty',
        ninety = 'ninety';

        if(num.length == 1){
            if(num == '1'){
                str += one;
            }else if(num == '2'){
                str += ' ' + two;
            }else if(num == '3'){
                str += ' ' + three;
            }else if(num == '4'){
                str += ' ' + four;
            }else if(num == '5'){
                str += ' ' + five;
            }else if(num == '6'){
                str += ' ' + six;
            }else if(num == '7'){
                str += ' ' + seven;
            }else if(num == '8'){
                str += ' ' + eight;
            }else if(num == '9'){
                str += ' ' + nine;
            }
        }


//-----------------------------------ten-------------------------------

        if(num.length == 2){
            if(num[0] == '1' && num[1] == '0'){
                str += ten;
            }else if(num[0] == '2' && num[1] == '0'){
                str += twenty;
            }else if(num[0] == '3' && num[1] == '0'){
                str += thirty;
            }else if(num[0] == '4' && num[1] == '0'){
                str += forty;
            }else if(num[0] == '5' && num[1] == '0'){
                str += fifty;
            }else if(num[0] == '6' && num[1] == '0'){
                str += sixty;
            }else if(num[0] == '7' && num[1] == '0'){
                str += seventy;
            }else if(num[0] == '8' && num[1] == '0'){
                str += eighty;
            }else if(num[0] == '9' && num[1] == '0'){
                str += ninety;
            }else if(num[0] == '1'){
                if(num[1] == '1'){
                    str += eleven;
                }else if(num[1] == '2'){
                    str += twelve;
                }else if(num[1] == '3'){
                    str += thirteen;
                }else if(num[1] == '4'){
                    str += fourteen;
                }else if(num[1] == '5'){
                    str += fifteen;
                }else if(num[1] == '6'){
                    str += sixteen;
                }else if(num[1] == '7'){
                    str += seventeen;
                }else if(num[1] == '8'){
                    str += eighteen;
                }else if(num[1] == '9'){
                    str += nineteen;
                }
            }else if(num[0] == '2'){
                if(num[1] == '1'){
                    str += twenty + ' ' + one ;
                }else if(num[1] == '2'){
                    str += twenty + ' ' + two ;
                }else if(num[1] == '3'){
                    str += twenty + ' ' + three ;
                }else if(num[1] == '4'){
                    str += twenty + ' ' + four ;
                }else if(num[1] == '5'){
                    str += twenty + ' ' + five ;
                }else if(num[1] == '6'){
                    str += twenty + ' ' + six ;
                }else if(num[1] == '7'){
                    str += twenty + ' ' + seven ;
                }else if(num[1] == '8'){
                    str += twenty + ' ' + eight ;
                }else if(num[1] == '9'){
                    str += twenty + ' ' + nine ;
                }
            }else if(num[0] == '3'){
                if(num[1] == '1'){
                    str += thirty + ' ' + one ;
                }else if(num[1] == '2'){
                    str += thirty + ' ' + two ;
                }else if(num[1] == '3'){
                    str += thirty + ' ' + three ;
                }else if(num[1] == '4'){
                    str += thirty + ' ' + four ;
                }else if(num[1] == '5'){
                    str += thirty + ' ' + five ;
                }else if(num[1] == '6'){
                    str += thirty + ' ' + six ;
                }else if(num[1] == '7'){
                    str += thirty + ' ' + seven ;
                }else if(num[1] == '8'){
                    str += thirty + ' ' + eight ;
                }else if(num[1] == '9'){
                    str += thirty + ' ' + nine ;
                }
            }else if(num[0] == '4'){
                if(num[1] == '1'){
                    str += forty + ' ' + one ;
                }else if(num[1] == '2'){
                    str += forty + ' ' + two ;
                }else if(num[1] == '3'){
                    str += forty + ' ' + three ;
                }else if(num[1] == '4'){
                    str += forty + ' ' + four ;
                }else if(num[1] == '5'){
                    str += forty + ' ' + five ;
                }else if(num[1] == '6'){
                    str += forty + ' ' + six ;
                }else if(num[1] == '7'){
                    str += forty + ' ' + seven ;
                }else if(num[1] == '8'){
                    str += forty + ' ' + eight ;
                }else if(num[1] == '9'){
                    str += forty + ' ' + nine ;
                }
            }else if(num[0] == '5'){
                if(num[1] == '1'){
                    str += fifty + ' ' + one ;
                }else if(num[1] == '2'){
                    str += fifty + ' ' + two ;
                }else if(num[1] == '3'){
                    str += fifty + ' ' + three ;
                }else if(num[1] == '4'){
                    str += fifty + ' ' + four ;
                }else if(num[1] == '5'){
                    str += fifty + ' ' + five ;
                }else if(num[1] == '6'){
                    str += fifty + ' ' + six ;
                }else if(num[1] == '7'){
                    str += fifty + ' ' + seven ;
                }else if(num[1] == '8'){
                    str += fifty + ' ' + eight ;
                }else if(num[1] == '9'){
                    str += fifty + ' ' + nine ;
                }
            }else if(num[0] == '6'){
                if(num[1] == '1'){
                    str += sixty + ' ' + one ;
                }else if(num[1] == '2'){
                    str += sixty + ' ' + two ;
                }else if(num[1] == '3'){
                    str += sixty + ' ' + three ;
                }else if(num[1] == '4'){
                    str += sixty + ' ' + four ;
                }else if(num[1] == '5'){
                    str += sixty + ' ' + five ;
                }else if(num[1] == '6'){
                    str += sixty + ' ' + six ;
                }else if(num[1] == '7'){
                    str += sixty + ' ' + seven ;
                }else if(num[1] == '8'){
                    str += sixty + ' ' + eight ;
                }else if(num[1] == '9'){
                    str += sixty + ' ' + nine ;
                }
            }else if(num[0] == '7'){
                if(num[1] == '1'){
                    str += seventy + ' ' + one ;
                }else if(num[1] == '2'){
                    str += seventy + ' ' + two ;
                }else if(num[1] == '3'){
                    str += seventy + ' ' + three ;
                }else if(num[1] == '4'){
                    str += seventy + ' ' + four ;
                }else if(num[1] == '5'){
                    str += seventy + ' ' + five ;
                }else if(num[1] == '6'){
                    str += seventy + ' ' + six ;
                }else if(num[1] == '7'){
                    str += seventy + ' ' + seven ;
                }else if(num[1] == '8'){
                    str += seventy + ' ' + eight ;
                }else if(num[1] == '9'){
                    str += seventy + ' ' + nine ;
                }
            }else if(num[0] == '8'){
                if(num[1] == '1'){
                    str += eighty + ' ' + one ;
                }else if(num[1] == '2'){
                    str += eighty + ' ' + two ;
                }else if(num[1] == '3'){
                    str += eighty + ' ' + three ;
                }else if(num[1] == '4'){
                    str += eighty + ' ' + four ;
                }else if(num[1] == '5'){
                    str += eighty + ' ' + five ;
                }else if(num[1] == '6'){
                    str += eighty + ' ' + six ;
                }else if(num[1] == '7'){
                    str += eighty + ' ' + seven ;
                }else if(num[1] == '8'){
                    str += eighty + ' ' + eight ;
                }else if(num[1] == '9'){
                    str += eighty + ' ' + nine ;
                }
            }else if(num[0] == '9'){
                if(num[1] == '1'){
                    str += ninety + ' ' + one ;
                }else if(num[1] == '2'){
                    str += ninety + ' ' + two ;
                }else if(num[1] == '3'){
                    str += ninety + ' ' + three ;
                }else if(num[1] == '4'){
                    str += ninety + ' ' + four ;
                }else if(num[1] == '5'){
                    str += ninety + ' ' + five ;
                }else if(num[1] == '6'){
                    str += ninety + ' ' + six ;
                }else if(num[1] == '7'){
                    str += ninety + ' ' + seven ;
                }else if(num[1] == '8'){
                    str += ninety + ' ' + eight ;
                }else if(num[1] == '9'){
                    str += ninety + ' ' + nine ;
                }
            }
        }

//--------------------------------------hundred---------------------------------

        let one_hundred = 'one hundred',
            two_hundred = 'two hundred',
            three_hundred = 'three hundred',
            four_hundred = 'four hundred',
            five_hundred = 'five hundred',
            six_hundred = 'six hundred',
            seven_hundred = 'seven hundred',
            eight_hundred = 'eight hundred',
            nine_hundred = 'nine hundred';

        if(num.length == 3){
            if(num[0] == '1' && num[1] == '0' && num[2] == '0'){
                str += one_hundred;
            }else if(num[0] == '2' && num[1] == '0' && num[2] == '0'){
                str += two_hundred;
            }else if(num[0] == '3' && num[1] == '0' && num[2] == '0'){
                str += three_hundred;
            }else if(num[0] == '4' && num[1] == '0' && num[2] == '0'){
                str += four_hundred;
            }else if(num[0] == '5' && num[1] == '0' && num[2] == '0'){
                str += five_hundred;
            }else if(num[0] == '6' && num[1] == '0' && num[2] == '0'){
                str += six_hundred;
            }else if(num[0] == '7' && num[1] == '0' && num[2] == '0'){
                str += seven_hundred;
            }else if(num[0] == '8' && num[1] == '0' && num[2] == '0'){
                str += eight_hundred;
            }else if(num[0] == '9' && num[1] == '0' && num[2] == '0'){
                str += nine_hundred;
            }else if(num[0] == '1' && num[1] == '0'){
                if(num[2] == '1'){
                    str += one_hundred + ' ' + one;
                }else if(num[1] == '0' && num[2] == '2'){
                    str += one_hundred + ' ' + two;
                }else if(num[1] == '0' && num[2] == '3'){
                    str += one_hundred + ' ' + three;
                }else if(num[1] == '0' && num[2] == '4'){
                    str += one_hundred + ' ' + four;
                }else if(num[1] == '0' && num[2] == '5'){
                    str += one_hundred + ' ' + five;
                }else if(num[1] == '0' && num[2] == '6'){
                    str += one_hundred + ' ' + six;
                }else if(num[1] == '0' && num[2] == '7'){
                    str += one_hundred + ' ' + seven;
                }else if(num[1] == '0' && num[2] == '8'){
                    str += one_hundred + ' ' + eight;
                }else if(num[1] == '0' && num[2] == '9'){
                    str += one_hundred + ' ' + nine;
                }else if(num[1] == '0' && num[2] == '9'){
                    str += one_hundred + ' ' + nine;
                }
            }else if(num[0] == '1' && num[1] == '1'){
                if(num[2] == '1'){
                    str += one_hundred + ' ' + eleven;
                }else if(num[2] == '2'){
                    str += one_hundred + ' ' + twelve;
                }else if(num[2] == '3'){
                    str += one_hundred + ' ' + thirteen;
                }else if(num[2] == '4'){
                    str += one_hundred + ' ' + fourteen;
                }else if(num[2] == '5'){
                    str += one_hundred + ' ' + fifteen;
                }else if(num[2] == '6'){
                    str += one_hundred + ' ' + sixteen;
                }else if(num[2] == '7'){
                    str += one_hundred + ' ' + seventeen;
                }else if(num[2] == '8'){
                    str += one_hundred + ' ' + eighteen;
                }else if(num[2] == '9'){
                    str += one_hundred + ' ' + nineteen;
                }else if(num[1] == '1' && num[2] == '0'){
                    str += one_hundred + ' ' + ten;
                }
            }else if(num[0] == '1' && num[1] == '2'){
                if(num[2] == '1'){
                    str += one_hundred + ' ' + twenty + ' ' + one;
                }else if(num[2] == '2'){
                    str += one_hundred + ' ' + twenty + ' ' + two;
                }else if(num[2] == '3'){
                    str += one_hundred + ' ' + twenty + ' ' + three;
                }else if(num[2] == '4'){
                    str += one_hundred + ' ' + twenty + ' ' + four;
                }else if(num[2] == '5'){
                    str += one_hundred + ' ' + twenty + ' ' + five;
                }else if(num[2] == '6'){
                    str += one_hundred + ' ' + twenty + ' ' + six;
                }else if(num[2] == '7'){
                    str += one_hundred + ' ' + twenty + ' ' + seven;
                }else if(num[2] == '8'){
                    str += one_hundred + ' ' + twenty + ' ' + eight;
                }else if(num[2] == '9'){
                    str += one_hundred + ' ' + twenty + ' ' + nine;
                }else if(num[1] == '2' && num[2] == '0'){
                    str += one_hundred + ' ' + twenty;
                }
            }else if(num[0] == '1' && num[1] == '3'){
                if(num[2] == '1'){
                    str += one_hundred + ' ' + thirty + ' ' + one;
                }else if(num[2] == '2'){
                    str += one_hundred + ' ' + thirty + ' ' + two;
                }else if(num[2] == '3'){
                    str += one_hundred + ' ' + thirty + ' ' + three;
                }else if(num[2] == '4'){
                    str += one_hundred + ' ' + thirty + ' ' + four;
                }else if(num[2] == '5'){
                    str += one_hundred + ' ' + thirty + ' ' + five;
                }else if(num[2] == '6'){
                    str += one_hundred + ' ' + thirty + ' ' + six;
                }else if(num[2] == '7'){
                    str += one_hundred + ' ' + thirty + ' ' + seven;
                }else if(num[2] == '8'){
                    str += one_hundred + ' ' + thirty + ' ' + eight;
                }else if(num[2] == '9'){
                    str += one_hundred + ' ' + thirty + ' ' + nine;
                }else if(num[1] == '3' && num[2] == '0'){
                    str += one_hundred + ' ' + thirty;
                }
            }else if(num[0] == '1' && num[1] == '4'){
                if(num[2] == '1'){
                    str += one_hundred + ' ' + forty + ' ' + one;
                }else if(num[2] == '2'){
                    str += one_hundred + ' ' + forty + ' ' + two;
                }else if(num[2] == '3'){
                    str += one_hundred + ' ' + forty + ' ' + three;
                }else if(num[2] == '4'){
                    str += one_hundred + ' ' + forty + ' ' + four;
                }else if(num[2] == '5'){
                    str += one_hundred + ' ' + forty + ' ' + five;
                }else if(num[2] == '6'){
                    str += one_hundred + ' ' + forty + ' ' + six;
                }else if(num[2] == '7'){
                    str += one_hundred + ' ' + forty + ' ' + seven;
                }else if(num[2] == '8'){
                    str += one_hundred + ' ' + forty + ' ' + eight;
                }else if(num[2] == '9'){
                    str += one_hundred + ' ' + forty + ' ' + nine;
                }else if(num[1] == '4' && num[2] == '0'){
                    str += one_hundred + ' ' + forty;
                }
            }else if(num[0] == '1' && num[1] == '5'){
                if(num[2] == '1'){
                    str += one_hundred + ' ' + fifty + ' ' + one;
                }else if(num[2] == '2'){
                    str += one_hundred + ' ' + fifty + ' ' + two;
                }else if(num[2] == '3'){
                    str += one_hundred + ' ' + fifty + ' ' + three;
                }else if(num[2] == '4'){
                    str += one_hundred + ' ' + fifty + ' ' + four;
                }else if(num[2] == '5'){
                    str += one_hundred + ' ' + fifty + ' ' + five;
                }else if(num[2] == '6'){
                    str += one_hundred + ' ' + fifty + ' ' + six;
                }else if(num[2] == '7'){
                    str += one_hundred + ' ' + fifty + ' ' + seven;
                }else if(num[2] == '8'){
                    str += one_hundred + ' ' + fifty + ' ' + eight;
                }else if(num[2] == '9'){
                    str += one_hundred + ' ' + fifty + ' ' + nine;
                }else if(num[1] == '5' && num[2] == '0'){
                    str += one_hundred + ' ' + fifty;
                }
            }else if(num[0] == '1' && num[1] == '6'){
                if(num[2] == '1'){
                    str += one_hundred + ' ' + sixty + ' ' + one;
                }else if(num[2] == '2'){
                    str += one_hundred + ' ' + sixty + ' ' + two;
                }else if(num[2] == '3'){
                    str += one_hundred + ' ' + sixty + ' ' + three;
                }else if(num[2] == '4'){
                    str += one_hundred + ' ' + sixty + ' ' + four;
                }else if(num[2] == '5'){
                    str += one_hundred + ' ' + sixty + ' ' + five;
                }else if(num[2] == '6'){
                    str += one_hundred + ' ' + sixty + ' ' + six;
                }else if(num[2] == '7'){
                    str += one_hundred + ' ' + sixty + ' ' + seven;
                }else if(num[2] == '8'){
                    str += one_hundred + ' ' + sixty + ' ' + eight;
                }else if(num[2] == '9'){
                    str += one_hundred + ' ' + sixty + ' ' + nine;
                }else if(num[1] == '6' && num[2] == '0'){
                    str += one_hundred + ' ' + sixty;
                }
            }else if(num[0] == '1' && num[1] == '7'){
                if(num[2] == '1'){
                    str += one_hundred + ' ' + seventy + ' ' + one;
                }else if(num[2] == '2'){
                    str += one_hundred + ' ' + seventy + ' ' + two;
                }else if(num[2] == '3'){
                    str += one_hundred + ' ' + seventy + ' ' + three;
                }else if(num[2] == '4'){
                    str += one_hundred + ' ' + seventy + ' ' + four;
                }else if(num[2] == '5'){
                    str += one_hundred + ' ' + seventy + ' ' + five;
                }else if(num[2] == '6'){
                    str += one_hundred + ' ' + seventy + ' ' + six;
                }else if(num[2] == '7'){
                    str += one_hundred + ' ' + seventy + ' ' + seven;
                }else if(num[2] == '8'){
                    str += one_hundred + ' ' + seventy + ' ' + eight;
                }else if(num[2] == '9'){
                    str += one_hundred + ' ' + seventy + ' ' + nine;
                }else if(num[1] == '7' && num[2] == '0'){
                    str += one_hundred + ' ' + seventy;
                }
            }else if(num[0] == '1' && num[1] == '8'){
                if(num[2] == '1'){
                    str += one_hundred + ' ' + eighty + ' ' + one;
                }else if(num[2] == '2'){
                    str += one_hundred + ' ' + eighty + ' ' + two;
                }else if(num[2] == '3'){
                    str += one_hundred + ' ' + eighty + ' ' + three;
                }else if(num[2] == '4'){
                    str += one_hundred + ' ' + eighty + ' ' + four;
                }else if(num[2] == '5'){
                    str += one_hundred + ' ' + eighty + ' ' + five;
                }else if(num[2] == '6'){
                    str += one_hundred + ' ' + eighty + ' ' + six;
                }else if(num[2] == '7'){
                    str += one_hundred + ' ' + eighty + ' ' + seven;
                }else if(num[2] == '8'){
                    str += one_hundred + ' ' + eighty + ' ' + eight;
                }else if(num[2] == '9'){
                    str += one_hundred + ' ' + eighty + ' ' + nine;
                }else if(num[1] == '8' && num[2] == '0'){
                    str += one_hundred + ' ' + eighty;
                }
            }else if(num[0] == '1' && num[1] == '9'){
                if(num[2] == '1'){
                    str += one_hundred + ' ' + ninety + ' ' + one;
                }else if(num[2] == '2'){
                    str += one_hundred + ' ' + ninety + ' ' + two;
                }else if(num[2] == '3'){
                    str += one_hundred + ' ' + ninety + ' ' + three;
                }else if(num[2] == '4'){
                    str += one_hundred + ' ' + ninety + ' ' + four;
                }else if(num[2] == '5'){
                    str += one_hundred + ' ' + ninety + ' ' + five;
                }else if(num[2] == '6'){
                    str += one_hundred + ' ' + ninety + ' ' + six;
                }else if(num[2] == '7'){
                    str += one_hundred + ' ' + ninety + ' ' + seven;
                }else if(num[2] == '8'){
                    str += one_hundred + ' ' + ninety + ' ' + eight;
                }else if(num[2] == '9'){
                    str += one_hundred + ' ' + ninety + ' ' + nine;
                }else if(num[1] == '9' && num[2] == '0'){
                    str += one_hundred + ' ' + ninety;
                }
            }
 /*200 */           if(num[0] == '2' && num[1] == '0'){
                if(num[2] == '1'){
                    str += two_hundred + ' ' + one;
                }else if(num[1] == '0' && num[2] == '2'){
                    str += two_hundred + ' ' + two;
                }else if(num[1] == '0' && num[2] == '3'){
                    str += two_hundred + ' ' + three;
                }else if(num[1] == '0' && num[2] == '4'){
                    str += two_hundred + ' ' + four;
                }else if(num[1] == '0' && num[2] == '5'){
                    str += two_hundred + ' ' + five;
                }else if(num[1] == '0' && num[2] == '6'){
                    str += two_hundred + ' ' + six;
                }else if(num[1] == '0' && num[2] == '7'){
                    str += two_hundred + ' ' + seven;
                }else if(num[1] == '0' && num[2] == '8'){
                    str += two_hundred + ' ' + eight;
                }else if(num[1] == '0' && num[2] == '9'){
                    str += two_hundred + ' ' + nine;
                }else if(num[1] == '0' && num[2] == '9'){
                    str += two_hundred + ' ' + nine;
                }
            }else if(num[0] == '2' && num[1] == '1'){
                if(num[2] == '1'){
                    str += two_hundred + ' ' + eleven;
                }else if(num[2] == '2'){
                    str += two_hundred + ' ' + twelve;
                }else if(num[2] == '3'){
                    str += two_hundred + ' ' + thirteen;
                }else if(num[2] == '4'){
                    str += two_hundred + ' ' + fourteen;
                }else if(num[2] == '5'){
                    str += two_hundred + ' ' + fifteen;
                }else if(num[2] == '6'){
                    str += two_hundred + ' ' + sixteen;
                }else if(num[2] == '7'){
                    str += two_hundred + ' ' + seventeen;
                }else if(num[2] == '8'){
                    str += two_hundred + ' ' + eighteen;
                }else if(num[2] == '9'){
                    str += two_hundred + ' ' + nineteen;
                }else if(num[1] == '1' && num[2] == '0'){
                    str += two_hundred + ' ' + ten;
                }
            }else if(num[0] == '2' && num[1] == '2'){
                if(num[2] == '1'){
                    str += two_hundred + ' ' + twenty + ' ' + one;
                }else if(num[2] == '2'){
                    str += two_hundred + ' ' + twenty + ' ' + two;
                }else if(num[2] == '3'){
                    str += two_hundred + ' ' + twenty + ' ' + three;
                }else if(num[2] == '4'){
                    str += two_hundred + ' ' + twenty + ' ' + four;
                }else if(num[2] == '5'){
                    str += two_hundred + ' ' + twenty + ' ' + five;
                }else if(num[2] == '6'){
                    str += two_hundred + ' ' + twenty + ' ' + six;
                }else if(num[2] == '7'){
                    str += two_hundred + ' ' + twenty + ' ' + seven;
                }else if(num[2] == '8'){
                    str += two_hundred + ' ' + twenty + ' ' + eight;
                }else if(num[2] == '9'){
                    str += two_hundred + ' ' + twenty + ' ' + nine;
                }else if(num[1] == '2' && num[2] == '0'){
                    str += two_hundred + ' ' + twenty;
                }
            }else if(num[0] == '2' && num[1] == '3'){
                if(num[2] == '1'){
                    str += two_hundred + ' ' + thirty + ' ' + one;
                }else if(num[2] == '2'){
                    str += two_hundred + ' ' + thirty + ' ' + two;
                }else if(num[2] == '3'){
                    str += two_hundred + ' ' + thirty + ' ' + three;
                }else if(num[2] == '4'){
                    str += two_hundred + ' ' + thirty + ' ' + four;
                }else if(num[2] == '5'){
                    str += two_hundred + ' ' + thirty + ' ' + five;
                }else if(num[2] == '6'){
                    str += two_hundred + ' ' + thirty + ' ' + six;
                }else if(num[2] == '7'){
                    str += two_hundred + ' ' + thirty + ' ' + seven;
                }else if(num[2] == '8'){
                    str += two_hundred + ' ' + thirty + ' ' + eight;
                }else if(num[2] == '9'){
                    str += two_hundred + ' ' + thirty + ' ' + nine;
                }else if(num[1] == '3' && num[2] == '0'){
                    str += two_hundred + ' ' + thirty;
                }
            }else if(num[0] == '2' && num[1] == '4'){
                if(num[2] == '1'){
                    str += two_hundred + ' ' + forty + ' ' + one;
                }else if(num[2] == '2'){
                    str += two_hundred + ' ' + forty + ' ' + two;
                }else if(num[2] == '3'){
                    str += two_hundred + ' ' + forty + ' ' + three;
                }else if(num[2] == '4'){
                    str += two_hundred + ' ' + forty + ' ' + four;
                }else if(num[2] == '5'){
                    str += two_hundred + ' ' + forty + ' ' + five;
                }else if(num[2] == '6'){
                    str += two_hundred + ' ' + forty + ' ' + six;
                }else if(num[2] == '7'){
                    str += two_hundred + ' ' + forty + ' ' + seven;
                }else if(num[2] == '8'){
                    str += two_hundred + ' ' + forty + ' ' + eight;
                }else if(num[2] == '9'){
                    str += two_hundred + ' ' + forty + ' ' + nine;
                }else if(num[1] == '4' && num[2] == '0'){
                    str += two_hundred + ' ' + forty;
                }
            }else if(num[0] == '2' && num[1] == '5'){
                if(num[2] == '1'){
                    str += two_hundred + ' ' + fifty + ' ' + one;
                }else if(num[2] == '2'){
                    str += two_hundred + ' ' + fifty + ' ' + two;
                }else if(num[2] == '3'){
                    str += two_hundred + ' ' + fifty + ' ' + three;
                }else if(num[2] == '4'){
                    str += two_hundred + ' ' + fifty + ' ' + four;
                }else if(num[2] == '5'){
                    str += two_hundred + ' ' + fifty + ' ' + five;
                }else if(num[2] == '6'){
                    str += two_hundred + ' ' + fifty + ' ' + six;
                }else if(num[2] == '7'){
                    str += two_hundred + ' ' + fifty + ' ' + seven;
                }else if(num[2] == '8'){
                    str += two_hundred + ' ' + fifty + ' ' + eight;
                }else if(num[2] == '9'){
                    str += two_hundred + ' ' + fifty + ' ' + nine;
                }else if(num[1] == '5' && num[2] == '0'){
                    str += two_hundred + ' ' + fifty;
                }
            }else if(num[0] == '2' && num[1] == '6'){
                if(num[2] == '1'){
                    str += two_hundred + ' ' + sixty + ' ' + one;
                }else if(num[2] == '2'){
                    str += two_hundred + ' ' + sixty + ' ' + two;
                }else if(num[2] == '3'){
                    str += two_hundred + ' ' + sixty + ' ' + three;
                }else if(num[2] == '4'){
                    str += two_hundred + ' ' + sixty + ' ' + four;
                }else if(num[2] == '5'){
                    str += two_hundred + ' ' + sixty + ' ' + five;
                }else if(num[2] == '6'){
                    str += two_hundred + ' ' + sixty + ' ' + six;
                }else if(num[2] == '7'){
                    str += two_hundred + ' ' + sixty + ' ' + seven;
                }else if(num[2] == '8'){
                    str += two_hundred + ' ' + sixty + ' ' + eight;
                }else if(num[2] == '9'){
                    str += two_hundred + ' ' + sixty + ' ' + nine;
                }else if(num[1] == '6' && num[2] == '0'){
                    str += two_hundred + ' ' + sixty;
                }
            }else if(num[0] == '2' && num[1] == '7'){
                if(num[2] == '1'){
                    str += two_hundred + ' ' + seventy + ' ' + one;
                }else if(num[2] == '2'){
                    str += two_hundred + ' ' + seventy + ' ' + two;
                }else if(num[2] == '3'){
                    str += two_hundred + ' ' + seventy + ' ' + three;
                }else if(num[2] == '4'){
                    str += two_hundred + ' ' + seventy + ' ' + four;
                }else if(num[2] == '5'){
                    str += two_hundred + ' ' + seventy + ' ' + five;
                }else if(num[2] == '6'){
                    str += two_hundred + ' ' + seventy + ' ' + six;
                }else if(num[2] == '7'){
                    str += two_hundred + ' ' + seventy + ' ' + seven;
                }else if(num[2] == '8'){
                    str += two_hundred + ' ' + seventy + ' ' + eight;
                }else if(num[2] == '9'){
                    str += two_hundred + ' ' + seventy + ' ' + nine;
                }else if(num[1] == '7' && num[2] == '0'){
                    str += two_hundred + ' ' + seventy;
                }
            }else if(num[0] == '2' && num[1] == '8'){
                if(num[2] == '1'){
                    str += two_hundred + ' ' + eighty + ' ' + one;
                }else if(num[2] == '2'){
                    str += two_hundred + ' ' + eighty + ' ' + two;
                }else if(num[2] == '3'){
                    str += two_hundred + ' ' + eighty + ' ' + three;
                }else if(num[2] == '4'){
                    str += two_hundred + ' ' + eighty + ' ' + four;
                }else if(num[2] == '5'){
                    str += two_hundred + ' ' + eighty + ' ' + five;
                }else if(num[2] == '6'){
                    str += two_hundred + ' ' + eighty + ' ' + six;
                }else if(num[2] == '7'){
                    str += two_hundred + ' ' + eighty + ' ' + seven;
                }else if(num[2] == '8'){
                    str += two_hundred + ' ' + eighty + ' ' + eight;
                }else if(num[2] == '9'){
                    str += two_hundred + ' ' + eighty + ' ' + nine;
                }else if(num[1] == '8' && num[2] == '0'){
                    str += two_hundred + ' ' + eighty;
                }
            }else if(num[0] == '2' && num[1] == '9'){
                if(num[2] == '1'){
                    str += two_hundred + ' ' + ninety + ' ' + one;
                }else if(num[2] == '2'){
                    str += two_hundred + ' ' + ninety + ' ' + two;
                }else if(num[2] == '3'){
                    str += two_hundred + ' ' + ninety + ' ' + three;
                }else if(num[2] == '4'){
                    str += two_hundred + ' ' + ninety + ' ' + four;
                }else if(num[2] == '5'){
                    str += two_hundred + ' ' + ninety + ' ' + five;
                }else if(num[2] == '6'){
                    str += two_hundred + ' ' + ninety + ' ' + six;
                }else if(num[2] == '7'){
                    str += two_hundred + ' ' + ninety + ' ' + seven;
                }else if(num[2] == '8'){
                    str += two_hundred + ' ' + ninety + ' ' + eight;
                }else if(num[2] == '9'){
                    str += two_hundred + ' ' + ninety + ' ' + nine;
                }else if(num[1] == '9' && num[2] == '0'){
                    str += two_hundred + ' ' + ninety;
                }
            }
/*300 */           if(num[0] == '3' && num[1] == '0'){
                if(num[2] == '1'){
                    str += three_hundred + ' ' + one;
                }else if(num[1] == '0' && num[2] == '2'){
                    str += three_hundred + ' ' + two;
                }else if(num[1] == '0' && num[2] == '3'){
                    str += three_hundred + ' ' + three;
                }else if(num[1] == '0' && num[2] == '4'){
                    str += three_hundred + ' ' + four;
                }else if(num[1] == '0' && num[2] == '5'){
                    str += three_hundred + ' ' + five;
                }else if(num[1] == '0' && num[2] == '6'){
                    str += three_hundred + ' ' + six;
                }else if(num[1] == '0' && num[2] == '7'){
                    str += three_hundred + ' ' + seven;
                }else if(num[1] == '0' && num[2] == '8'){
                    str += three_hundred + ' ' + eight;
                }else if(num[1] == '0' && num[2] == '9'){
                    str += three_hundred + ' ' + nine;
                }else if(num[1] == '0' && num[2] == '9'){
                    str += three_hundred + ' ' + nine;
                }
            }else if(num[0] == '3' && num[1] == '1'){
                if(num[2] == '1'){
                    str += three_hundred + ' ' + eleven;
                }else if(num[2] == '2'){
                    str += three_hundred + ' ' + twelve;
                }else if(num[2] == '3'){
                    str += three_hundred + ' ' + thirteen;
                }else if(num[2] == '4'){
                    str += three_hundred + ' ' + fourteen;
                }else if(num[2] == '5'){
                    str += three_hundred + ' ' + fifteen;
                }else if(num[2] == '6'){
                    str += three_hundred + ' ' + sixteen;
                }else if(num[2] == '7'){
                    str += three_hundred + ' ' + seventeen;
                }else if(num[2] == '8'){
                    str += three_hundred + ' ' + eighteen;
                }else if(num[2] == '9'){
                    str += three_hundred + ' ' + nineteen;
                }else if(num[1] == '1' && num[2] == '0'){
                    str += three_hundred + ' ' + ten;
                }
            }else if(num[0] == '3' && num[1] == '2'){
                if(num[2] == '1'){
                    str += three_hundred + ' ' + twenty + ' ' + one;
                }else if(num[2] == '2'){
                    str += three_hundred + ' ' + twenty + ' ' + two;
                }else if(num[2] == '3'){
                    str += three_hundred + ' ' + twenty + ' ' + three;
                }else if(num[2] == '4'){
                    str += three_hundred + ' ' + twenty + ' ' + four;
                }else if(num[2] == '5'){
                    str += three_hundred + ' ' + twenty + ' ' + five;
                }else if(num[2] == '6'){
                    str += three_hundred + ' ' + twenty + ' ' + six;
                }else if(num[2] == '7'){
                    str += three_hundred + ' ' + twenty + ' ' + seven;
                }else if(num[2] == '8'){
                    str += three_hundred + ' ' + twenty + ' ' + eight;
                }else if(num[2] == '9'){
                    str += three_hundred + ' ' + twenty + ' ' + nine;
                }else if(num[1] == '2' && num[2] == '0'){
                    str += three_hundred + ' ' + twenty;
                }
            }else if(num[0] == '3' && num[1] == '3'){
                if(num[2] == '1'){
                    str += three_hundred + ' ' + thirty + ' ' + one;
                }else if(num[2] == '2'){
                    str += three_hundred + ' ' + thirty + ' ' + two;
                }else if(num[2] == '3'){
                    str += three_hundred + ' ' + thirty + ' ' + three;
                }else if(num[2] == '4'){
                    str += three_hundred + ' ' + thirty + ' ' + four;
                }else if(num[2] == '5'){
                    str += three_hundred + ' ' + thirty + ' ' + five;
                }else if(num[2] == '6'){
                    str += three_hundred + ' ' + thirty + ' ' + six;
                }else if(num[2] == '7'){
                    str += three_hundred + ' ' + thirty + ' ' + seven;
                }else if(num[2] == '8'){
                    str += three_hundred + ' ' + thirty + ' ' + eight;
                }else if(num[2] == '9'){
                    str += three_hundred + ' ' + thirty + ' ' + nine;
                }else if(num[1] == '3' && num[2] == '0'){
                    str += three_hundred + ' ' + thirty;
                }
            }else if(num[0] == '3' && num[1] == '4'){
                if(num[2] == '1'){
                    str += three_hundred + ' ' + forty + ' ' + one;
                }else if(num[2] == '2'){
                    str += three_hundred + ' ' + forty + ' ' + two;
                }else if(num[2] == '3'){
                    str += three_hundred + ' ' + forty + ' ' + three;
                }else if(num[2] == '4'){
                    str += three_hundred + ' ' + forty + ' ' + four;
                }else if(num[2] == '5'){
                    str += three_hundred + ' ' + forty + ' ' + five;
                }else if(num[2] == '6'){
                    str += three_hundred + ' ' + forty + ' ' + six;
                }else if(num[2] == '7'){
                    str += three_hundred + ' ' + forty + ' ' + seven;
                }else if(num[2] == '8'){
                    str += three_hundred + ' ' + forty + ' ' + eight;
                }else if(num[2] == '9'){
                    str += three_hundred + ' ' + forty + ' ' + nine;
                }else if(num[1] == '4' && num[2] == '0'){
                    str += three_hundred + ' ' + forty;
                }
            }else if(num[0] == '3' && num[1] == '5'){
                if(num[2] == '1'){
                    str += three_hundred + ' ' + fifty + ' ' + one;
                }else if(num[2] == '2'){
                    str += three_hundred + ' ' + fifty + ' ' + two;
                }else if(num[2] == '3'){
                    str += three_hundred + ' ' + fifty + ' ' + three;
                }else if(num[2] == '4'){
                    str += three_hundred + ' ' + fifty + ' ' + four;
                }else if(num[2] == '5'){
                    str += three_hundred + ' ' + fifty + ' ' + five;
                }else if(num[2] == '6'){
                    str += three_hundred + ' ' + fifty + ' ' + six;
                }else if(num[2] == '7'){
                    str += three_hundred + ' ' + fifty + ' ' + seven;
                }else if(num[2] == '8'){
                    str += three_hundred + ' ' + fifty + ' ' + eight;
                }else if(num[2] == '9'){
                    str += three_hundred + ' ' + fifty + ' ' + nine;
                }else if(num[1] == '5' && num[2] == '0'){
                    str += three_hundred + ' ' + fifty;
                }
            }else if(num[0] == '3' && num[1] == '6'){
                if(num[2] == '1'){
                    str += three_hundred + ' ' + sixty + ' ' + one;
                }else if(num[2] == '2'){
                    str += three_hundred + ' ' + sixty + ' ' + two;
                }else if(num[2] == '3'){
                    str += three_hundred + ' ' + sixty + ' ' + three;
                }else if(num[2] == '4'){
                    str += three_hundred + ' ' + sixty + ' ' + four;
                }else if(num[2] == '5'){
                    str += three_hundred + ' ' + sixty + ' ' + five;
                }else if(num[2] == '6'){
                    str += three_hundred + ' ' + sixty + ' ' + six;
                }else if(num[2] == '7'){
                    str += three_hundred + ' ' + sixty + ' ' + seven;
                }else if(num[2] == '8'){
                    str += three_hundred + ' ' + sixty + ' ' + eight;
                }else if(num[2] == '9'){
                    str += three_hundred + ' ' + sixty + ' ' + nine;
                }else if(num[1] == '6' && num[2] == '0'){
                    str += three_hundred + ' ' + sixty;
                }
            }else if(num[0] == '3' && num[1] == '7'){
                if(num[2] == '1'){
                    str += three_hundred + ' ' + seventy + ' ' + one;
                }else if(num[2] == '2'){
                    str += three_hundred + ' ' + seventy + ' ' + two;
                }else if(num[2] == '3'){
                    str += three_hundred + ' ' + seventy + ' ' + three;
                }else if(num[2] == '4'){
                    str += three_hundred + ' ' + seventy + ' ' + four;
                }else if(num[2] == '5'){
                    str += three_hundred + ' ' + seventy + ' ' + five;
                }else if(num[2] == '6'){
                    str += three_hundred + ' ' + seventy + ' ' + six;
                }else if(num[2] == '7'){
                    str += three_hundred + ' ' + seventy + ' ' + seven;
                }else if(num[2] == '8'){
                    str += three_hundred + ' ' + seventy + ' ' + eight;
                }else if(num[2] == '9'){
                    str += three_hundred + ' ' + seventy + ' ' + nine;
                }else if(num[1] == '7' && num[2] == '0'){
                    str += three_hundred + ' ' + seventy;
                }
            }else if(num[0] == '3' && num[1] == '8'){
                if(num[2] == '1'){
                    str += three_hundred + ' ' + eighty + ' ' + one;
                }else if(num[2] == '2'){
                    str += three_hundred + ' ' + eighty + ' ' + two;
                }else if(num[2] == '3'){
                    str += three_hundred + ' ' + eighty + ' ' + three;
                }else if(num[2] == '4'){
                    str += three_hundred + ' ' + eighty + ' ' + four;
                }else if(num[2] == '5'){
                    str += three_hundred + ' ' + eighty + ' ' + five;
                }else if(num[2] == '6'){
                    str += three_hundred + ' ' + eighty + ' ' + six;
                }else if(num[2] == '7'){
                    str += three_hundred + ' ' + eighty + ' ' + seven;
                }else if(num[2] == '8'){
                    str += three_hundred + ' ' + eighty + ' ' + eight;
                }else if(num[2] == '9'){
                    str += three_hundred + ' ' + eighty + ' ' + nine;
                }else if(num[1] == '8' && num[2] == '0'){
                    str += three_hundred + ' ' + eighty;
                }
            }else if(num[0] == '3' && num[1] == '9'){
                if(num[2] == '1'){
                    str += three_hundred + ' ' + ninety + ' ' + one;
                }else if(num[2] == '2'){
                    str += three_hundred + ' ' + ninety + ' ' + two;
                }else if(num[2] == '3'){
                    str += three_hundred + ' ' + ninety + ' ' + three;
                }else if(num[2] == '4'){
                    str += three_hundred + ' ' + ninety + ' ' + four;
                }else if(num[2] == '5'){
                    str += three_hundred + ' ' + ninety + ' ' + five;
                }else if(num[2] == '6'){
                    str += three_hundred + ' ' + ninety + ' ' + six;
                }else if(num[2] == '7'){
                    str += three_hundred + ' ' + ninety + ' ' + seven;
                }else if(num[2] == '8'){
                    str += three_hundred + ' ' + ninety + ' ' + eight;
                }else if(num[2] == '9'){
                    str += three_hundred + ' ' + ninety + ' ' + nine;
                }else if(num[1] == '9' && num[2] == '0'){
                    str += three_hundred + ' ' + ninety;
                }
            }
/*400 */           if(num[0] == '4' && num[1] == '0'){
                if(num[2] == '1'){
                    str += four_hundred + ' ' + one;
                }else if(num[1] == '0' && num[2] == '2'){
                    str += four_hundred + ' ' + two;
                }else if(num[1] == '0' && num[2] == '3'){
                    str += four_hundred + ' ' + three;
                }else if(num[1] == '0' && num[2] == '4'){
                    str += four_hundred + ' ' + four;
                }else if(num[1] == '0' && num[2] == '5'){
                    str += four_hundred + ' ' + five;
                }else if(num[1] == '0' && num[2] == '6'){
                    str += four_hundred + ' ' + six;
                }else if(num[1] == '0' && num[2] == '7'){
                    str += four_hundred + ' ' + seven;
                }else if(num[1] == '0' && num[2] == '8'){
                    str += four_hundred + ' ' + eight;
                }else if(num[1] == '0' && num[2] == '9'){
                    str += four_hundred + ' ' + nine;
                }else if(num[1] == '0' && num[2] == '9'){
                    str += four_hundred + ' ' + nine;
                }
            }else if(num[0] == '4' && num[1] == '1'){
                if(num[2] == '1'){
                    str += four_hundred + ' ' + eleven;
                }else if(num[2] == '2'){
                    str += four_hundred + ' ' + twelve;
                }else if(num[2] == '3'){
                    str += four_hundred + ' ' + thirteen;
                }else if(num[2] == '4'){
                    str += four_hundred + ' ' + fourteen;
                }else if(num[2] == '5'){
                    str += four_hundred + ' ' + fifteen;
                }else if(num[2] == '6'){
                    str += four_hundred + ' ' + sixteen;
                }else if(num[2] == '7'){
                    str += four_hundred + ' ' + seventeen;
                }else if(num[2] == '8'){
                    str += four_hundred + ' ' + eighteen;
                }else if(num[2] == '9'){
                    str += four_hundred + ' ' + nineteen;
                }else if(num[1] == '1' && num[2] == '0'){
                    str += four_hundred + ' ' + ten;
                }
            }else if(num[0] == '4' && num[1] == '2'){
                if(num[2] == '1'){
                    str += four_hundred + ' ' + twenty + ' ' + one;
                }else if(num[2] == '2'){
                    str += four_hundred + ' ' + twenty + ' ' + two;
                }else if(num[2] == '3'){
                    str += four_hundred + ' ' + twenty + ' ' + three;
                }else if(num[2] == '4'){
                    str += four_hundred + ' ' + twenty + ' ' + four;
                }else if(num[2] == '5'){
                    str += four_hundred + ' ' + twenty + ' ' + five;
                }else if(num[2] == '6'){
                    str += four_hundred + ' ' + twenty + ' ' + six;
                }else if(num[2] == '7'){
                    str += four_hundred + ' ' + twenty + ' ' + seven;
                }else if(num[2] == '8'){
                    str += four_hundred + ' ' + twenty + ' ' + eight;
                }else if(num[2] == '9'){
                    str += four_hundred + ' ' + twenty + ' ' + nine;
                }else if(num[1] == '2' && num[2] == '0'){
                    str += four_hundred + ' ' + twenty;
                }
            }else if(num[0] == '4' && num[1] == '3'){
                if(num[2] == '1'){
                    str += four_hundred + ' ' + thirty + ' ' + one;
                }else if(num[2] == '2'){
                    str += four_hundred + ' ' + thirty + ' ' + two;
                }else if(num[2] == '3'){
                    str += four_hundred + ' ' + thirty + ' ' + three;
                }else if(num[2] == '4'){
                    str += four_hundred + ' ' + thirty + ' ' + four;
                }else if(num[2] == '5'){
                    str += four_hundred + ' ' + thirty + ' ' + five;
                }else if(num[2] == '6'){
                    str += four_hundred + ' ' + thirty + ' ' + six;
                }else if(num[2] == '7'){
                    str += four_hundred + ' ' + thirty + ' ' + seven;
                }else if(num[2] == '8'){
                    str += four_hundred + ' ' + thirty + ' ' + eight;
                }else if(num[2] == '9'){
                    str += four_hundred + ' ' + thirty + ' ' + nine;
                }else if(num[1] == '3' && num[2] == '0'){
                    str += four_hundred + ' ' + thirty;
                }
            }else if(num[0] == '4' && num[1] == '4'){
                if(num[2] == '1'){
                    str += four_hundred + ' ' + forty + ' ' + one;
                }else if(num[2] == '2'){
                    str += four_hundred + ' ' + forty + ' ' + two;
                }else if(num[2] == '3'){
                    str += four_hundred + ' ' + forty + ' ' + three;
                }else if(num[2] == '4'){
                    str += four_hundred + ' ' + forty + ' ' + four;
                }else if(num[2] == '5'){
                    str += four_hundred + ' ' + forty + ' ' + five;
                }else if(num[2] == '6'){
                    str += four_hundred + ' ' + forty + ' ' + six;
                }else if(num[2] == '7'){
                    str += four_hundred + ' ' + forty + ' ' + seven;
                }else if(num[2] == '8'){
                    str += four_hundred + ' ' + forty + ' ' + eight;
                }else if(num[2] == '9'){
                    str += four_hundred + ' ' + forty + ' ' + nine;
                }else if(num[1] == '4' && num[2] == '0'){
                    str += four_hundred + ' ' + forty;
                }
            }else if(num[0] == '4' && num[1] == '5'){
                if(num[2] == '1'){
                    str += four_hundred + ' ' + fifty + ' ' + one;
                }else if(num[2] == '2'){
                    str += four_hundred + ' ' + fifty + ' ' + two;
                }else if(num[2] == '3'){
                    str += four_hundred + ' ' + fifty + ' ' + three;
                }else if(num[2] == '4'){
                    str += four_hundred + ' ' + fifty + ' ' + four;
                }else if(num[2] == '5'){
                    str += four_hundred + ' ' + fifty + ' ' + five;
                }else if(num[2] == '6'){
                    str += four_hundred + ' ' + fifty + ' ' + six;
                }else if(num[2] == '7'){
                    str += four_hundred + ' ' + fifty + ' ' + seven;
                }else if(num[2] == '8'){
                    str += four_hundred + ' ' + fifty + ' ' + eight;
                }else if(num[2] == '9'){
                    str += four_hundred + ' ' + fifty + ' ' + nine;
                }else if(num[1] == '5' && num[2] == '0'){
                    str += four_hundred + ' ' + fifty;
                }
            }else if(num[0] == '4' && num[1] == '6'){
                if(num[2] == '1'){
                    str += four_hundred + ' ' + sixty + ' ' + one;
                }else if(num[2] == '2'){
                    str += four_hundred + ' ' + sixty + ' ' + two;
                }else if(num[2] == '3'){
                    str += four_hundred + ' ' + sixty + ' ' + three;
                }else if(num[2] == '4'){
                    str += four_hundred + ' ' + sixty + ' ' + four;
                }else if(num[2] == '5'){
                    str += four_hundred + ' ' + sixty + ' ' + five;
                }else if(num[2] == '6'){
                    str += four_hundred + ' ' + sixty + ' ' + six;
                }else if(num[2] == '7'){
                    str += four_hundred + ' ' + sixty + ' ' + seven;
                }else if(num[2] == '8'){
                    str += four_hundred + ' ' + sixty + ' ' + eight;
                }else if(num[2] == '9'){
                    str += four_hundred + ' ' + sixty + ' ' + nine;
                }else if(num[1] == '6' && num[2] == '0'){
                    str += four_hundred + ' ' + sixty;
                }
            }else if(num[0] == '4' && num[1] == '7'){
                if(num[2] == '1'){
                    str += four_hundred + ' ' + seventy + ' ' + one;
                }else if(num[2] == '2'){
                    str += four_hundred + ' ' + seventy + ' ' + two;
                }else if(num[2] == '3'){
                    str += four_hundred + ' ' + seventy + ' ' + three;
                }else if(num[2] == '4'){
                    str += four_hundred + ' ' + seventy + ' ' + four;
                }else if(num[2] == '5'){
                    str += four_hundred + ' ' + seventy + ' ' + five;
                }else if(num[2] == '6'){
                    str += four_hundred + ' ' + seventy + ' ' + six;
                }else if(num[2] == '7'){
                    str += four_hundred + ' ' + seventy + ' ' + seven;
                }else if(num[2] == '8'){
                    str += four_hundred + ' ' + seventy + ' ' + eight;
                }else if(num[2] == '9'){
                    str += four_hundred + ' ' + seventy + ' ' + nine;
                }else if(num[1] == '7' && num[2] == '0'){
                    str += four_hundred + ' ' + seventy;
                }
            }else if(num[0] == '4' && num[1] == '8'){
                if(num[2] == '1'){
                    str += four_hundred + ' ' + eighty + ' ' + one;
                }else if(num[2] == '2'){
                    str += four_hundred + ' ' + eighty + ' ' + two;
                }else if(num[2] == '3'){
                    str += four_hundred + ' ' + eighty + ' ' + three;
                }else if(num[2] == '4'){
                    str += four_hundred + ' ' + eighty + ' ' + four;
                }else if(num[2] == '5'){
                    str += four_hundred + ' ' + eighty + ' ' + five;
                }else if(num[2] == '6'){
                    str += four_hundred + ' ' + eighty + ' ' + six;
                }else if(num[2] == '7'){
                    str += four_hundred + ' ' + eighty + ' ' + seven;
                }else if(num[2] == '8'){
                    str += four_hundred + ' ' + eighty + ' ' + eight;
                }else if(num[2] == '9'){
                    str += four_hundred + ' ' + eighty + ' ' + nine;
                }else if(num[1] == '8' && num[2] == '0'){
                    str += four_hundred + ' ' + eighty;
                }
            }else if(num[0] == '4' && num[1] == '9'){
                if(num[2] == '1'){
                    str += four_hundred + ' ' + ninety + ' ' + one;
                }else if(num[2] == '2'){
                    str += four_hundred + ' ' + ninety + ' ' + two;
                }else if(num[2] == '3'){
                    str += four_hundred + ' ' + ninety + ' ' + three;
                }else if(num[2] == '4'){
                    str += four_hundred + ' ' + ninety + ' ' + four;
                }else if(num[2] == '5'){
                    str += four_hundred + ' ' + ninety + ' ' + five;
                }else if(num[2] == '6'){
                    str += four_hundred + ' ' + ninety + ' ' + six;
                }else if(num[2] == '7'){
                    str += four_hundred + ' ' + ninety + ' ' + seven;
                }else if(num[2] == '8'){
                    str += four_hundred + ' ' + ninety + ' ' + eight;
                }else if(num[2] == '9'){
                    str += four_hundred + ' ' + ninety + ' ' + nine;
                }else if(num[1] == '9' && num[2] == '0'){
                    str += four_hundred + ' ' + ninety;
                }
            }
/*500 */           if(num[0] == '5' && num[1] == '0'){
                if(num[2] == '1'){
                    str += five_hundred + ' ' + one;
                }else if(num[1] == '0' && num[2] == '2'){
                    str += five_hundred + ' ' + two;
                }else if(num[1] == '0' && num[2] == '3'){
                    str += five_hundred + ' ' + three;
                }else if(num[1] == '0' && num[2] == '4'){
                    str += five_hundred + ' ' + four;
                }else if(num[1] == '0' && num[2] == '5'){
                    str += five_hundred + ' ' + five;
                }else if(num[1] == '0' && num[2] == '6'){
                    str += five_hundred + ' ' + six;
                }else if(num[1] == '0' && num[2] == '7'){
                    str += five_hundred + ' ' + seven;
                }else if(num[1] == '0' && num[2] == '8'){
                    str += five_hundred + ' ' + eight;
                }else if(num[1] == '0' && num[2] == '9'){
                    str += five_hundred + ' ' + nine;
                }else if(num[1] == '0' && num[2] == '9'){
                    str += five_hundred + ' ' + nine;
                }
            }else if(num[0] == '5' && num[1] == '1'){
                if(num[2] == '1'){
                    str += five_hundred + ' ' + eleven;
                }else if(num[2] == '2'){
                    str += five_hundred + ' ' + twelve;
                }else if(num[2] == '3'){
                    str += five_hundred + ' ' + thirteen;
                }else if(num[2] == '4'){
                    str += five_hundred + ' ' + fourteen;
                }else if(num[2] == '5'){
                    str += five_hundred + ' ' + fifteen;
                }else if(num[2] == '6'){
                    str += five_hundred + ' ' + sixteen;
                }else if(num[2] == '7'){
                    str += five_hundred + ' ' + seventeen;
                }else if(num[2] == '8'){
                    str += five_hundred + ' ' + eighteen;
                }else if(num[2] == '9'){
                    str += five_hundred + ' ' + nineteen;
                }else if(num[1] == '1' && num[2] == '0'){
                    str += five_hundred + ' ' + ten;
                }
            }else if(num[0] == '5' && num[1] == '2'){
                if(num[2] == '1'){
                    str += five_hundred + ' ' + twenty + ' ' + one;
                }else if(num[2] == '2'){
                    str += five_hundred + ' ' + twenty + ' ' + two;
                }else if(num[2] == '3'){
                    str += five_hundred + ' ' + twenty + ' ' + three;
                }else if(num[2] == '4'){
                    str += five_hundred + ' ' + twenty + ' ' + four;
                }else if(num[2] == '5'){
                    str += five_hundred + ' ' + twenty + ' ' + five;
                }else if(num[2] == '6'){
                    str += five_hundred + ' ' + twenty + ' ' + six;
                }else if(num[2] == '7'){
                    str += five_hundred + ' ' + twenty + ' ' + seven;
                }else if(num[2] == '8'){
                    str += five_hundred + ' ' + twenty + ' ' + eight;
                }else if(num[2] == '9'){
                    str += five_hundred + ' ' + twenty + ' ' + nine;
                }else if(num[1] == '2' && num[2] == '0'){
                    str += five_hundred + ' ' + twenty;
                }
            }else if(num[0] == '5' && num[1] == '3'){
                if(num[2] == '1'){
                    str += five_hundred + ' ' + thirty + ' ' + one;
                }else if(num[2] == '2'){
                    str += five_hundred + ' ' + thirty + ' ' + two;
                }else if(num[2] == '3'){
                    str += five_hundred + ' ' + thirty + ' ' + three;
                }else if(num[2] == '4'){
                    str += five_hundred + ' ' + thirty + ' ' + four;
                }else if(num[2] == '5'){
                    str += five_hundred + ' ' + thirty + ' ' + five;
                }else if(num[2] == '6'){
                    str += five_hundred + ' ' + thirty + ' ' + six;
                }else if(num[2] == '7'){
                    str += five_hundred + ' ' + thirty + ' ' + seven;
                }else if(num[2] == '8'){
                    str += five_hundred + ' ' + thirty + ' ' + eight;
                }else if(num[2] == '9'){
                    str += five_hundred + ' ' + thirty + ' ' + nine;
                }else if(num[1] == '3' && num[2] == '0'){
                    str += five_hundred + ' ' + thirty;
                }
            }else if(num[0] == '5' && num[1] == '4'){
                if(num[2] == '1'){
                    str += five_hundred + ' ' + forty + ' ' + one;
                }else if(num[2] == '2'){
                    str += five_hundred + ' ' + forty + ' ' + two;
                }else if(num[2] == '3'){
                    str += five_hundred + ' ' + forty + ' ' + three;
                }else if(num[2] == '4'){
                    str += five_hundred + ' ' + forty + ' ' + four;
                }else if(num[2] == '5'){
                    str += five_hundred + ' ' + forty + ' ' + five;
                }else if(num[2] == '6'){
                    str += five_hundred + ' ' + forty + ' ' + six;
                }else if(num[2] == '7'){
                    str += five_hundred + ' ' + forty + ' ' + seven;
                }else if(num[2] == '8'){
                    str += five_hundred + ' ' + forty + ' ' + eight;
                }else if(num[2] == '9'){
                    str += five_hundred + ' ' + forty + ' ' + nine;
                }else if(num[1] == '4' && num[2] == '0'){
                    str += five_hundred + ' ' + forty;
                }
            }else if(num[0] == '5' && num[1] == '5'){
                if(num[2] == '1'){
                    str += five_hundred + ' ' + fifty + ' ' + one;
                }else if(num[2] == '2'){
                    str += five_hundred + ' ' + fifty + ' ' + two;
                }else if(num[2] == '3'){
                    str += five_hundred + ' ' + fifty + ' ' + three;
                }else if(num[2] == '4'){
                    str += five_hundred + ' ' + fifty + ' ' + four;
                }else if(num[2] == '5'){
                    str += five_hundred + ' ' + fifty + ' ' + five;
                }else if(num[2] == '6'){
                    str += five_hundred + ' ' + fifty + ' ' + six;
                }else if(num[2] == '7'){
                    str += five_hundred + ' ' + fifty + ' ' + seven;
                }else if(num[2] == '8'){
                    str += five_hundred + ' ' + fifty + ' ' + eight;
                }else if(num[2] == '9'){
                    str += five_hundred + ' ' + fifty + ' ' + nine;
                }else if(num[1] == '5' && num[2] == '0'){
                    str += five_hundred + ' ' + fifty;
                }
            }else if(num[0] == '5' && num[1] == '6'){
                if(num[2] == '1'){
                    str += five_hundred + ' ' + sixty + ' ' + one;
                }else if(num[2] == '2'){
                    str += five_hundred + ' ' + sixty + ' ' + two;
                }else if(num[2] == '3'){
                    str += five_hundred + ' ' + sixty + ' ' + three;
                }else if(num[2] == '4'){
                    str += five_hundred + ' ' + sixty + ' ' + four;
                }else if(num[2] == '5'){
                    str += five_hundred + ' ' + sixty + ' ' + five;
                }else if(num[2] == '6'){
                    str += five_hundred + ' ' + sixty + ' ' + six;
                }else if(num[2] == '7'){
                    str += five_hundred + ' ' + sixty + ' ' + seven;
                }else if(num[2] == '8'){
                    str += five_hundred + ' ' + sixty + ' ' + eight;
                }else if(num[2] == '9'){
                    str += five_hundred + ' ' + sixty + ' ' + nine;
                }else if(num[1] == '6' && num[2] == '0'){
                    str += five_hundred + ' ' + sixty;
                }
            }else if(num[0] == '5' && num[1] == '7'){
                if(num[2] == '1'){
                    str += five_hundred + ' ' + seventy + ' ' + one;
                }else if(num[2] == '2'){
                    str += five_hundred + ' ' + seventy + ' ' + two;
                }else if(num[2] == '3'){
                    str += five_hundred + ' ' + seventy + ' ' + three;
                }else if(num[2] == '4'){
                    str += five_hundred + ' ' + seventy + ' ' + four;
                }else if(num[2] == '5'){
                    str += five_hundred + ' ' + seventy + ' ' + five;
                }else if(num[2] == '6'){
                    str += five_hundred + ' ' + seventy + ' ' + six;
                }else if(num[2] == '7'){
                    str += five_hundred + ' ' + seventy + ' ' + seven;
                }else if(num[2] == '8'){
                    str += five_hundred + ' ' + seventy + ' ' + eight;
                }else if(num[2] == '9'){
                    str += five_hundred + ' ' + seventy + ' ' + nine;
                }else if(num[1] == '7' && num[2] == '0'){
                    str += five_hundred + ' ' + seventy;
                }
            }else if(num[0] == '5' && num[1] == '8'){
                if(num[2] == '1'){
                    str += five_hundred + ' ' + eighty + ' ' + one;
                }else if(num[2] == '2'){
                    str += five_hundred + ' ' + eighty + ' ' + two;
                }else if(num[2] == '3'){
                    str += five_hundred + ' ' + eighty + ' ' + three;
                }else if(num[2] == '4'){
                    str += five_hundred + ' ' + eighty + ' ' + four;
                }else if(num[2] == '5'){
                    str += five_hundred + ' ' + eighty + ' ' + five;
                }else if(num[2] == '6'){
                    str += five_hundred + ' ' + eighty + ' ' + six;
                }else if(num[2] == '7'){
                    str += five_hundred + ' ' + eighty + ' ' + seven;
                }else if(num[2] == '8'){
                    str += five_hundred + ' ' + eighty + ' ' + eight;
                }else if(num[2] == '9'){
                    str += five_hundred + ' ' + eighty + ' ' + nine;
                }else if(num[1] == '8' && num[2] == '0'){
                    str += five_hundred + ' ' + eighty;
                }
            }else if(num[0] == '5' && num[1] == '9'){
                if(num[2] == '1'){
                    str += five_hundred + ' ' + ninety + ' ' + one;
                }else if(num[2] == '2'){
                    str += five_hundred + ' ' + ninety + ' ' + two;
                }else if(num[2] == '3'){
                    str += five_hundred + ' ' + ninety + ' ' + three;
                }else if(num[2] == '4'){
                    str += five_hundred + ' ' + ninety + ' ' + four;
                }else if(num[2] == '5'){
                    str += five_hundred + ' ' + ninety + ' ' + five;
                }else if(num[2] == '6'){
                    str += five_hundred + ' ' + ninety + ' ' + six;
                }else if(num[2] == '7'){
                    str += five_hundred + ' ' + ninety + ' ' + seven;
                }else if(num[2] == '8'){
                    str += five_hundred + ' ' + ninety + ' ' + eight;
                }else if(num[2] == '9'){
                    str += five_hundred + ' ' + ninety + ' ' + nine;
                }else if(num[1] == '9' && num[2] == '0'){
                    str += five_hundred + ' ' + ninety;
                }
            }
/*600 */           if(num[0] == '6' && num[1] == '0'){
                if(num[2] == '1'){
                    str += six_hundred + ' ' + one;
                }else if(num[1] == '0' && num[2] == '2'){
                    str += six_hundred + ' ' + two;
                }else if(num[1] == '0' && num[2] == '3'){
                    str += six_hundred + ' ' + three;
                }else if(num[1] == '0' && num[2] == '4'){
                    str += six_hundred + ' ' + four;
                }else if(num[1] == '0' && num[2] == '5'){
                    str += six_hundred + ' ' + five;
                }else if(num[1] == '0' && num[2] == '6'){
                    str += six_hundred + ' ' + six;
                }else if(num[1] == '0' && num[2] == '7'){
                    str += six_hundred + ' ' + seven;
                }else if(num[1] == '0' && num[2] == '8'){
                    str += six_hundred + ' ' + eight;
                }else if(num[1] == '0' && num[2] == '9'){
                    str += six_hundred + ' ' + nine;
                }else if(num[1] == '0' && num[2] == '9'){
                    str += six_hundred + ' ' + nine;
                }
            }else if(num[0] == '6' && num[1] == '1'){
                if(num[2] == '1'){
                    str += six_hundred + ' ' + eleven;
                }else if(num[2] == '2'){
                    str += six_hundred + ' ' + twelve;
                }else if(num[2] == '3'){
                    str += six_hundred + ' ' + thirteen;
                }else if(num[2] == '4'){
                    str += six_hundred + ' ' + fourteen;
                }else if(num[2] == '5'){
                    str += six_hundred + ' ' + fifteen;
                }else if(num[2] == '6'){
                    str += six_hundred + ' ' + sixteen;
                }else if(num[2] == '7'){
                    str += six_hundred + ' ' + seventeen;
                }else if(num[2] == '8'){
                    str += six_hundred + ' ' + eighteen;
                }else if(num[2] == '9'){
                    str += six_hundred + ' ' + nineteen;
                }else if(num[1] == '1' && num[2] == '0'){
                    str += six_hundred + ' ' + ten;
                }
            }else if(num[0] == '6' && num[1] == '2'){
                if(num[2] == '1'){
                    str += six_hundred + ' ' + twenty + ' ' + one;
                }else if(num[2] == '2'){
                    str += six_hundred + ' ' + twenty + ' ' + two;
                }else if(num[2] == '3'){
                    str += six_hundred + ' ' + twenty + ' ' + three;
                }else if(num[2] == '4'){
                    str += six_hundred + ' ' + twenty + ' ' + four;
                }else if(num[2] == '5'){
                    str += six_hundred + ' ' + twenty + ' ' + five;
                }else if(num[2] == '6'){
                    str += six_hundred + ' ' + twenty + ' ' + six;
                }else if(num[2] == '7'){
                    str += six_hundred + ' ' + twenty + ' ' + seven;
                }else if(num[2] == '8'){
                    str += six_hundred + ' ' + twenty + ' ' + eight;
                }else if(num[2] == '9'){
                    str += six_hundred + ' ' + twenty + ' ' + nine;
                }else if(num[1] == '2' && num[2] == '0'){
                    str += six_hundred + ' ' + twenty;
                }
            }else if(num[0] == '6' && num[1] == '3'){
                if(num[2] == '1'){
                    str += six_hundred + ' ' + thirty + ' ' + one;
                }else if(num[2] == '2'){
                    str += six_hundred + ' ' + thirty + ' ' + two;
                }else if(num[2] == '3'){
                    str += six_hundred + ' ' + thirty + ' ' + three;
                }else if(num[2] == '4'){
                    str += six_hundred + ' ' + thirty + ' ' + four;
                }else if(num[2] == '5'){
                    str += six_hundred + ' ' + thirty + ' ' + five;
                }else if(num[2] == '6'){
                    str += six_hundred + ' ' + thirty + ' ' + six;
                }else if(num[2] == '7'){
                    str += six_hundred + ' ' + thirty + ' ' + seven;
                }else if(num[2] == '8'){
                    str += six_hundred + ' ' + thirty + ' ' + eight;
                }else if(num[2] == '9'){
                    str += six_hundred + ' ' + thirty + ' ' + nine;
                }else if(num[1] == '3' && num[2] == '0'){
                    str += six_hundred + ' ' + thirty;
                }
            }else if(num[0] == '6' && num[1] == '4'){
                if(num[2] == '1'){
                    str += six_hundred + ' ' + forty + ' ' + one;
                }else if(num[2] == '2'){
                    str += six_hundred + ' ' + forty + ' ' + two;
                }else if(num[2] == '3'){
                    str += six_hundred + ' ' + forty + ' ' + three;
                }else if(num[2] == '4'){
                    str += six_hundred + ' ' + forty + ' ' + four;
                }else if(num[2] == '5'){
                    str += six_hundred + ' ' + forty + ' ' + five;
                }else if(num[2] == '6'){
                    str += six_hundred + ' ' + forty + ' ' + six;
                }else if(num[2] == '7'){
                    str += six_hundred + ' ' + forty + ' ' + seven;
                }else if(num[2] == '8'){
                    str += six_hundred + ' ' + forty + ' ' + eight;
                }else if(num[2] == '9'){
                    str += six_hundred + ' ' + forty + ' ' + nine;
                }else if(num[1] == '4' && num[2] == '0'){
                    str += six_hundred + ' ' + forty;
                }
            }else if(num[0] == '6' && num[1] == '5'){
                if(num[2] == '1'){
                    str += six_hundred + ' ' + fifty + ' ' + one;
                }else if(num[2] == '2'){
                    str += six_hundred + ' ' + fifty + ' ' + two;
                }else if(num[2] == '3'){
                    str += six_hundred + ' ' + fifty + ' ' + three;
                }else if(num[2] == '4'){
                    str += six_hundred + ' ' + fifty + ' ' + four;
                }else if(num[2] == '5'){
                    str += six_hundred + ' ' + fifty + ' ' + five;
                }else if(num[2] == '6'){
                    str += six_hundred + ' ' + fifty + ' ' + six;
                }else if(num[2] == '7'){
                    str += six_hundred + ' ' + fifty + ' ' + seven;
                }else if(num[2] == '8'){
                    str += six_hundred + ' ' + fifty + ' ' + eight;
                }else if(num[2] == '9'){
                    str += six_hundred + ' ' + fifty + ' ' + nine;
                }else if(num[1] == '5' && num[2] == '0'){
                    str += six_hundred + ' ' + fifty;
                }
            }else if(num[0] == '6' && num[1] == '6'){
                if(num[2] == '1'){
                    str += six_hundred + ' ' + sixty + ' ' + one;
                }else if(num[2] == '2'){
                    str += six_hundred + ' ' + sixty + ' ' + two;
                }else if(num[2] == '3'){
                    str += six_hundred + ' ' + sixty + ' ' + three;
                }else if(num[2] == '4'){
                    str += six_hundred + ' ' + sixty + ' ' + four;
                }else if(num[2] == '5'){
                    str += six_hundred + ' ' + sixty + ' ' + five;
                }else if(num[2] == '6'){
                    str += six_hundred + ' ' + sixty + ' ' + six;
                }else if(num[2] == '7'){
                    str += six_hundred + ' ' + sixty + ' ' + seven;
                }else if(num[2] == '8'){
                    str += six_hundred + ' ' + sixty + ' ' + eight;
                }else if(num[2] == '9'){
                    str += six_hundred + ' ' + sixty + ' ' + nine;
                }else if(num[1] == '6' && num[2] == '0'){
                    str += six_hundred + ' ' + sixty;
                }
            }else if(num[0] == '6' && num[1] == '7'){
                if(num[2] == '1'){
                    str += six_hundred + ' ' + seventy + ' ' + one;
                }else if(num[2] == '2'){
                    str += six_hundred + ' ' + seventy + ' ' + two;
                }else if(num[2] == '3'){
                    str += six_hundred + ' ' + seventy + ' ' + three;
                }else if(num[2] == '4'){
                    str += six_hundred + ' ' + seventy + ' ' + four;
                }else if(num[2] == '5'){
                    str += six_hundred + ' ' + seventy + ' ' + five;
                }else if(num[2] == '6'){
                    str += six_hundred + ' ' + seventy + ' ' + six;
                }else if(num[2] == '7'){
                    str += six_hundred + ' ' + seventy + ' ' + seven;
                }else if(num[2] == '8'){
                    str += six_hundred + ' ' + seventy + ' ' + eight;
                }else if(num[2] == '9'){
                    str += six_hundred + ' ' + seventy + ' ' + nine;
                }else if(num[1] == '7' && num[2] == '0'){
                    str += six_hundred + ' ' + seventy;
                }
            }else if(num[0] == '6' && num[1] == '8'){
                if(num[2] == '1'){
                    str += six_hundred + ' ' + eighty + ' ' + one;
                }else if(num[2] == '2'){
                    str += six_hundred + ' ' + eighty + ' ' + two;
                }else if(num[2] == '3'){
                    str += six_hundred + ' ' + eighty + ' ' + three;
                }else if(num[2] == '4'){
                    str += six_hundred + ' ' + eighty + ' ' + four;
                }else if(num[2] == '5'){
                    str += six_hundred + ' ' + eighty + ' ' + five;
                }else if(num[2] == '6'){
                    str += six_hundred + ' ' + eighty + ' ' + six;
                }else if(num[2] == '7'){
                    str += six_hundred + ' ' + eighty + ' ' + seven;
                }else if(num[2] == '8'){
                    str += six_hundred + ' ' + eighty + ' ' + eight;
                }else if(num[2] == '9'){
                    str += six_hundred + ' ' + eighty + ' ' + nine;
                }else if(num[1] == '8' && num[2] == '0'){
                    str += six_hundred + ' ' + eighty;
                }
            }else if(num[0] == '6' && num[1] == '9'){
                if(num[2] == '1'){
                    str += six_hundred + ' ' + ninety + ' ' + one;
                }else if(num[2] == '2'){
                    str += six_hundred + ' ' + ninety + ' ' + two;
                }else if(num[2] == '3'){
                    str += six_hundred + ' ' + ninety + ' ' + three;
                }else if(num[2] == '4'){
                    str += six_hundred + ' ' + ninety + ' ' + four;
                }else if(num[2] == '5'){
                    str += six_hundred + ' ' + ninety + ' ' + five;
                }else if(num[2] == '6'){
                    str += six_hundred + ' ' + ninety + ' ' + six;
                }else if(num[2] == '7'){
                    str += six_hundred + ' ' + ninety + ' ' + seven;
                }else if(num[2] == '8'){
                    str += six_hundred + ' ' + ninety + ' ' + eight;
                }else if(num[2] == '9'){
                    str += six_hundred + ' ' + ninety + ' ' + nine;
                }else if(num[1] == '9' && num[2] == '0'){
                    str += six_hundred + ' ' + ninety;
                }
            }
/*700 */           if(num[0] == '7' && num[1] == '0'){
                if(num[2] == '1'){
                    str += seven_hundred + ' ' + one;
                }else if(num[1] == '0' && num[2] == '2'){
                    str += seven_hundred + ' ' + two;
                }else if(num[1] == '0' && num[2] == '3'){
                    str += seven_hundred + ' ' + three;
                }else if(num[1] == '0' && num[2] == '4'){
                    str += seven_hundred + ' ' + four;
                }else if(num[1] == '0' && num[2] == '5'){
                    str += seven_hundred + ' ' + five;
                }else if(num[1] == '0' && num[2] == '6'){
                    str += seven_hundred + ' ' + six;
                }else if(num[1] == '0' && num[2] == '7'){
                    str += seven_hundred + ' ' + seven;
                }else if(num[1] == '0' && num[2] == '8'){
                    str += seven_hundred + ' ' + eight;
                }else if(num[1] == '0' && num[2] == '9'){
                    str += seven_hundred + ' ' + nine;
                }else if(num[1] == '0' && num[2] == '9'){
                    str += seven_hundred + ' ' + nine;
                }
            }else if(num[0] == '7' && num[1] == '1'){
                if(num[2] == '1'){
                    str += seven_hundred + ' ' + eleven;
                }else if(num[2] == '2'){
                    str += seven_hundred + ' ' + twelve;
                }else if(num[2] == '3'){
                    str += seven_hundred + ' ' + thirteen;
                }else if(num[2] == '4'){
                    str += seven_hundred + ' ' + fourteen;
                }else if(num[2] == '5'){
                    str += seven_hundred + ' ' + fifteen;
                }else if(num[2] == '6'){
                    str += seven_hundred + ' ' + sixteen;
                }else if(num[2] == '7'){
                    str += seven_hundred + ' ' + seventeen;
                }else if(num[2] == '8'){
                    str += seven_hundred + ' ' + eighteen;
                }else if(num[2] == '9'){
                    str += seven_hundred + ' ' + nineteen;
                }else if(num[1] == '1' && num[2] == '0'){
                    str += seven_hundred + ' ' + ten;
                }
            }else if(num[0] == '7' && num[1] == '2'){
                if(num[2] == '1'){
                    str += seven_hundred + ' ' + twenty + ' ' + one;
                }else if(num[2] == '2'){
                    str += seven_hundred + ' ' + twenty + ' ' + two;
                }else if(num[2] == '3'){
                    str += seven_hundred + ' ' + twenty + ' ' + three;
                }else if(num[2] == '4'){
                    str += seven_hundred + ' ' + twenty + ' ' + four;
                }else if(num[2] == '5'){
                    str += seven_hundred + ' ' + twenty + ' ' + five;
                }else if(num[2] == '6'){
                    str += seven_hundred + ' ' + twenty + ' ' + six;
                }else if(num[2] == '7'){
                    str += seven_hundred + ' ' + twenty + ' ' + seven;
                }else if(num[2] == '8'){
                    str += seven_hundred + ' ' + twenty + ' ' + eight;
                }else if(num[2] == '9'){
                    str += seven_hundred + ' ' + twenty + ' ' + nine;
                }else if(num[1] == '2' && num[2] == '0'){
                    str += seven_hundred + ' ' + twenty;
                }
            }else if(num[0] == '7' && num[1] == '3'){
                if(num[2] == '1'){
                    str += seven_hundred + ' ' + thirty + ' ' + one;
                }else if(num[2] == '2'){
                    str += seven_hundred + ' ' + thirty + ' ' + two;
                }else if(num[2] == '3'){
                    str += seven_hundred + ' ' + thirty + ' ' + three;
                }else if(num[2] == '4'){
                    str += seven_hundred + ' ' + thirty + ' ' + four;
                }else if(num[2] == '5'){
                    str += seven_hundred + ' ' + thirty + ' ' + five;
                }else if(num[2] == '6'){
                    str += seven_hundred + ' ' + thirty + ' ' + six;
                }else if(num[2] == '7'){
                    str += seven_hundred + ' ' + thirty + ' ' + seven;
                }else if(num[2] == '8'){
                    str += seven_hundred + ' ' + thirty + ' ' + eight;
                }else if(num[2] == '9'){
                    str += seven_hundred + ' ' + thirty + ' ' + nine;
                }else if(num[1] == '3' && num[2] == '0'){
                    str += seven_hundred + ' ' + thirty;
                }
            }else if(num[0] == '7' && num[1] == '4'){
                if(num[2] == '1'){
                    str += seven_hundred + ' ' + forty + ' ' + one;
                }else if(num[2] == '2'){
                    str += seven_hundred + ' ' + forty + ' ' + two;
                }else if(num[2] == '3'){
                    str += seven_hundred + ' ' + forty + ' ' + three;
                }else if(num[2] == '4'){
                    str += seven_hundred + ' ' + forty + ' ' + four;
                }else if(num[2] == '5'){
                    str += seven_hundred + ' ' + forty + ' ' + five;
                }else if(num[2] == '6'){
                    str += seven_hundred + ' ' + forty + ' ' + six;
                }else if(num[2] == '7'){
                    str += seven_hundred + ' ' + forty + ' ' + seven;
                }else if(num[2] == '8'){
                    str += seven_hundred + ' ' + forty + ' ' + eight;
                }else if(num[2] == '9'){
                    str += seven_hundred + ' ' + forty + ' ' + nine;
                }else if(num[1] == '4' && num[2] == '0'){
                    str += seven_hundred + ' ' + forty;
                }
            }else if(num[0] == '7' && num[1] == '5'){
                if(num[2] == '1'){
                    str += seven_hundred + ' ' + fifty + ' ' + one;
                }else if(num[2] == '2'){
                    str += seven_hundred + ' ' + fifty + ' ' + two;
                }else if(num[2] == '3'){
                    str += seven_hundred + ' ' + fifty + ' ' + three;
                }else if(num[2] == '4'){
                    str += seven_hundred + ' ' + fifty + ' ' + four;
                }else if(num[2] == '5'){
                    str += seven_hundred + ' ' + fifty + ' ' + five;
                }else if(num[2] == '6'){
                    str += seven_hundred + ' ' + fifty + ' ' + six;
                }else if(num[2] == '7'){
                    str += seven_hundred + ' ' + fifty + ' ' + seven;
                }else if(num[2] == '8'){
                    str += seven_hundred + ' ' + fifty + ' ' + eight;
                }else if(num[2] == '9'){
                    str += seven_hundred + ' ' + fifty + ' ' + nine;
                }else if(num[1] == '5' && num[2] == '0'){
                    str += seven_hundred + ' ' + fifty;
                }
            }else if(num[0] == '7' && num[1] == '6'){
                if(num[2] == '1'){
                    str += seven_hundred + ' ' + sixty + ' ' + one;
                }else if(num[2] == '2'){
                    str += seven_hundred + ' ' + sixty + ' ' + two;
                }else if(num[2] == '3'){
                    str += seven_hundred + ' ' + sixty + ' ' + three;
                }else if(num[2] == '4'){
                    str += seven_hundred + ' ' + sixty + ' ' + four;
                }else if(num[2] == '5'){
                    str += seven_hundred + ' ' + sixty + ' ' + five;
                }else if(num[2] == '6'){
                    str += seven_hundred + ' ' + sixty + ' ' + six;
                }else if(num[2] == '7'){
                    str += seven_hundred + ' ' + sixty + ' ' + seven;
                }else if(num[2] == '8'){
                    str += seven_hundred + ' ' + sixty + ' ' + eight;
                }else if(num[2] == '9'){
                    str += seven_hundred + ' ' + sixty + ' ' + nine;
                }else if(num[1] == '6' && num[2] == '0'){
                    str += seven_hundred + ' ' + sixty;
                }
            }else if(num[0] == '7' && num[1] == '7'){
                if(num[2] == '1'){
                    str += seven_hundred + ' ' + seventy + ' ' + one;
                }else if(num[2] == '2'){
                    str += seven_hundred + ' ' + seventy + ' ' + two;
                }else if(num[2] == '3'){
                    str += seven_hundred + ' ' + seventy + ' ' + three;
                }else if(num[2] == '4'){
                    str += seven_hundred + ' ' + seventy + ' ' + four;
                }else if(num[2] == '5'){
                    str += seven_hundred + ' ' + seventy + ' ' + five;
                }else if(num[2] == '6'){
                    str += seven_hundred + ' ' + seventy + ' ' + six;
                }else if(num[2] == '7'){
                    str += seven_hundred + ' ' + seventy + ' ' + seven;
                }else if(num[2] == '8'){
                    str += seven_hundred + ' ' + seventy + ' ' + eight;
                }else if(num[2] == '9'){
                    str += seven_hundred + ' ' + seventy + ' ' + nine;
                }else if(num[1] == '7' && num[2] == '0'){
                    str += seven_hundred + ' ' + seventy;
                }
            }else if(num[0] == '7' && num[1] == '8'){
                if(num[2] == '1'){
                    str += seven_hundred + ' ' + eighty + ' ' + one;
                }else if(num[2] == '2'){
                    str += seven_hundred + ' ' + eighty + ' ' + two;
                }else if(num[2] == '3'){
                    str += seven_hundred + ' ' + eighty + ' ' + three;
                }else if(num[2] == '4'){
                    str += seven_hundred + ' ' + eighty + ' ' + four;
                }else if(num[2] == '5'){
                    str += seven_hundred + ' ' + eighty + ' ' + five;
                }else if(num[2] == '6'){
                    str += seven_hundred + ' ' + eighty + ' ' + six;
                }else if(num[2] == '7'){
                    str += seven_hundred + ' ' + eighty + ' ' + seven;
                }else if(num[2] == '8'){
                    str += seven_hundred + ' ' + eighty + ' ' + eight;
                }else if(num[2] == '9'){
                    str += seven_hundred + ' ' + eighty + ' ' + nine;
                }else if(num[1] == '8' && num[2] == '0'){
                    str += seven_hundred + ' ' + eighty;
                }
            }else if(num[0] == '7' && num[1] == '9'){
                if(num[2] == '1'){
                    str += seven_hundred + ' ' + ninety + ' ' + one;
                }else if(num[2] == '2'){
                    str += seven_hundred + ' ' + ninety + ' ' + two;
                }else if(num[2] == '3'){
                    str += seven_hundred + ' ' + ninety + ' ' + three;
                }else if(num[2] == '4'){
                    str += seven_hundred + ' ' + ninety + ' ' + four;
                }else if(num[2] == '5'){
                    str += seven_hundred + ' ' + ninety + ' ' + five;
                }else if(num[2] == '6'){
                    str += seven_hundred + ' ' + ninety + ' ' + six;
                }else if(num[2] == '7'){
                    str += seven_hundred + ' ' + ninety + ' ' + seven;
                }else if(num[2] == '8'){
                    str += seven_hundred + ' ' + ninety + ' ' + eight;
                }else if(num[2] == '9'){
                    str += seven_hundred + ' ' + ninety + ' ' + nine;
                }else if(num[1] == '9' && num[2] == '0'){
                    str += seven_hundred + ' ' + ninety;
                }
            }
/*800 */           if(num[0] == '8' && num[1] == '0'){
                if(num[2] == '1'){
                    str += eight_hundred + ' ' + one;
                }else if(num[1] == '0' && num[2] == '2'){
                    str += eight_hundred + ' ' + two;
                }else if(num[1] == '0' && num[2] == '3'){
                    str += eight_hundred + ' ' + three;
                }else if(num[1] == '0' && num[2] == '4'){
                    str += eight_hundred + ' ' + four;
                }else if(num[1] == '0' && num[2] == '5'){
                    str += eight_hundred + ' ' + five;
                }else if(num[1] == '0' && num[2] == '6'){
                    str += eight_hundred + ' ' + six;
                }else if(num[1] == '0' && num[2] == '7'){
                    str += eight_hundred + ' ' + seven;
                }else if(num[1] == '0' && num[2] == '8'){
                    str += eight_hundred + ' ' + eight;
                }else if(num[1] == '0' && num[2] == '9'){
                    str += eight_hundred + ' ' + nine;
                }else if(num[1] == '0' && num[2] == '9'){
                    str += eight_hundred + ' ' + nine;
                }
            }else if(num[0] == '8' && num[1] == '1'){
                if(num[2] == '1'){
                    str += eight_hundred + ' ' + eleven;
                }else if(num[2] == '2'){
                    str += eight_hundred + ' ' + twelve;
                }else if(num[2] == '3'){
                    str += eight_hundred + ' ' + thirteen;
                }else if(num[2] == '4'){
                    str += eight_hundred + ' ' + fourteen;
                }else if(num[2] == '5'){
                    str += eight_hundred + ' ' + fifteen;
                }else if(num[2] == '6'){
                    str += eight_hundred + ' ' + sixteen;
                }else if(num[2] == '7'){
                    str += eight_hundred + ' ' + seventeen;
                }else if(num[2] == '8'){
                    str += eight_hundred + ' ' + eighteen;
                }else if(num[2] == '9'){
                    str += eight_hundred + ' ' + nineteen;
                }else if(num[1] == '1' && num[2] == '0'){
                    str += eight_hundred + ' ' + ten;
                }
            }else if(num[0] == '8' && num[1] == '2'){
                if(num[2] == '1'){
                    str += eight_hundred + ' ' + twenty + ' ' + one;
                }else if(num[2] == '2'){
                    str += eight_hundred + ' ' + twenty + ' ' + two;
                }else if(num[2] == '3'){
                    str += eight_hundred + ' ' + twenty + ' ' + three;
                }else if(num[2] == '4'){
                    str += eight_hundred + ' ' + twenty + ' ' + four;
                }else if(num[2] == '5'){
                    str += eight_hundred + ' ' + twenty + ' ' + five;
                }else if(num[2] == '6'){
                    str += eight_hundred + ' ' + twenty + ' ' + six;
                }else if(num[2] == '7'){
                    str += eight_hundred + ' ' + twenty + ' ' + seven;
                }else if(num[2] == '8'){
                    str += eight_hundred + ' ' + twenty + ' ' + eight;
                }else if(num[2] == '9'){
                    str += eight_hundred + ' ' + twenty + ' ' + nine;
                }else if(num[1] == '2' && num[2] == '0'){
                    str += eight_hundred + ' ' + twenty;
                }
            }else if(num[0] == '8' && num[1] == '3'){
                if(num[2] == '1'){
                    str += eight_hundred + ' ' + thirty + ' ' + one;
                }else if(num[2] == '2'){
                    str += eight_hundred + ' ' + thirty + ' ' + two;
                }else if(num[2] == '3'){
                    str += eight_hundred + ' ' + thirty + ' ' + three;
                }else if(num[2] == '4'){
                    str += eight_hundred + ' ' + thirty + ' ' + four;
                }else if(num[2] == '5'){
                    str += eight_hundred + ' ' + thirty + ' ' + five;
                }else if(num[2] == '6'){
                    str += eight_hundred + ' ' + thirty + ' ' + six;
                }else if(num[2] == '7'){
                    str += eight_hundred + ' ' + thirty + ' ' + seven;
                }else if(num[2] == '8'){
                    str += eight_hundred + ' ' + thirty + ' ' + eight;
                }else if(num[2] == '9'){
                    str += eight_hundred + ' ' + thirty + ' ' + nine;
                }else if(num[1] == '3' && num[2] == '0'){
                    str += eight_hundred + ' ' + thirty;
                }
            }else if(num[0] == '8' && num[1] == '4'){
                if(num[2] == '1'){
                    str += eight_hundred + ' ' + forty + ' ' + one;
                }else if(num[2] == '2'){
                    str += eight_hundred + ' ' + forty + ' ' + two;
                }else if(num[2] == '3'){
                    str += eight_hundred + ' ' + forty + ' ' + three;
                }else if(num[2] == '4'){
                    str += eight_hundred + ' ' + forty + ' ' + four;
                }else if(num[2] == '5'){
                    str += eight_hundred + ' ' + forty + ' ' + five;
                }else if(num[2] == '6'){
                    str += eight_hundred + ' ' + forty + ' ' + six;
                }else if(num[2] == '7'){
                    str += eight_hundred + ' ' + forty + ' ' + seven;
                }else if(num[2] == '8'){
                    str += eight_hundred + ' ' + forty + ' ' + eight;
                }else if(num[2] == '9'){
                    str += eight_hundred + ' ' + forty + ' ' + nine;
                }else if(num[1] == '4' && num[2] == '0'){
                    str += eight_hundred + ' ' + forty;
                }
            }else if(num[0] == '8' && num[1] == '5'){
                if(num[2] == '1'){
                    str += eight_hundred + ' ' + fifty + ' ' + one;
                }else if(num[2] == '2'){
                    str += eight_hundred + ' ' + fifty + ' ' + two;
                }else if(num[2] == '3'){
                    str += eight_hundred + ' ' + fifty + ' ' + three;
                }else if(num[2] == '4'){
                    str += eight_hundred + ' ' + fifty + ' ' + four;
                }else if(num[2] == '5'){
                    str += eight_hundred + ' ' + fifty + ' ' + five;
                }else if(num[2] == '6'){
                    str += eight_hundred + ' ' + fifty + ' ' + six;
                }else if(num[2] == '7'){
                    str += eight_hundred + ' ' + fifty + ' ' + seven;
                }else if(num[2] == '8'){
                    str += eight_hundred + ' ' + fifty + ' ' + eight;
                }else if(num[2] == '9'){
                    str += eight_hundred + ' ' + fifty + ' ' + nine;
                }else if(num[1] == '5' && num[2] == '0'){
                    str += eight_hundred + ' ' + fifty;
                }
            }else if(num[0] == '8' && num[1] == '6'){
                if(num[2] == '1'){
                    str += eight_hundred + ' ' + sixty + ' ' + one;
                }else if(num[2] == '2'){
                    str += eight_hundred + ' ' + sixty + ' ' + two;
                }else if(num[2] == '3'){
                    str += eight_hundred + ' ' + sixty + ' ' + three;
                }else if(num[2] == '4'){
                    str += eight_hundred + ' ' + sixty + ' ' + four;
                }else if(num[2] == '5'){
                    str += eight_hundred + ' ' + sixty + ' ' + five;
                }else if(num[2] == '6'){
                    str += eight_hundred + ' ' + sixty + ' ' + six;
                }else if(num[2] == '7'){
                    str += eight_hundred + ' ' + sixty + ' ' + seven;
                }else if(num[2] == '8'){
                    str += eight_hundred + ' ' + sixty + ' ' + eight;
                }else if(num[2] == '9'){
                    str += eight_hundred + ' ' + sixty + ' ' + nine;
                }else if(num[1] == '6' && num[2] == '0'){
                    str += eight_hundred + ' ' + sixty;
                }
            }else if(num[0] == '8' && num[1] == '7'){
                if(num[2] == '1'){
                    str += eight_hundred + ' ' + seventy + ' ' + one;
                }else if(num[2] == '2'){
                    str += eight_hundred + ' ' + seventy + ' ' + two;
                }else if(num[2] == '3'){
                    str += eight_hundred + ' ' + seventy + ' ' + three;
                }else if(num[2] == '4'){
                    str += eight_hundred + ' ' + seventy + ' ' + four;
                }else if(num[2] == '5'){
                    str += eight_hundred + ' ' + seventy + ' ' + five;
                }else if(num[2] == '6'){
                    str += eight_hundred + ' ' + seventy + ' ' + six;
                }else if(num[2] == '7'){
                    str += eight_hundred + ' ' + seventy + ' ' + seven;
                }else if(num[2] == '8'){
                    str += eight_hundred + ' ' + seventy + ' ' + eight;
                }else if(num[2] == '9'){
                    str += eight_hundred + ' ' + seventy + ' ' + nine;
                }else if(num[1] == '7' && num[2] == '0'){
                    str += eight_hundred + ' ' + seventy;
                }
            }else if(num[0] == '8' && num[1] == '8'){
                if(num[2] == '1'){
                    str += eight_hundred + ' ' + eighty + ' ' + one;
                }else if(num[2] == '2'){
                    str += eight_hundred + ' ' + eighty + ' ' + two;
                }else if(num[2] == '3'){
                    str += eight_hundred + ' ' + eighty + ' ' + three;
                }else if(num[2] == '4'){
                    str += eight_hundred + ' ' + eighty + ' ' + four;
                }else if(num[2] == '5'){
                    str += eight_hundred + ' ' + eighty + ' ' + five;
                }else if(num[2] == '6'){
                    str += eight_hundred + ' ' + eighty + ' ' + six;
                }else if(num[2] == '7'){
                    str += eight_hundred + ' ' + eighty + ' ' + seven;
                }else if(num[2] == '8'){
                    str += eight_hundred + ' ' + eighty + ' ' + eight;
                }else if(num[2] == '9'){
                    str += eight_hundred + ' ' + eighty + ' ' + nine;
                }else if(num[1] == '8' && num[2] == '0'){
                    str += eight_hundred + ' ' + eighty;
                }
            }else if(num[0] == '8' && num[1] == '9'){
                if(num[2] == '1'){
                    str += eight_hundred + ' ' + ninety + ' ' + one;
                }else if(num[2] == '2'){
                    str += eight_hundred + ' ' + ninety + ' ' + two;
                }else if(num[2] == '3'){
                    str += eight_hundred + ' ' + ninety + ' ' + three;
                }else if(num[2] == '4'){
                    str += eight_hundred + ' ' + ninety + ' ' + four;
                }else if(num[2] == '5'){
                    str += eight_hundred + ' ' + ninety + ' ' + five;
                }else if(num[2] == '6'){
                    str += eight_hundred + ' ' + ninety + ' ' + six;
                }else if(num[2] == '7'){
                    str += eight_hundred + ' ' + ninety + ' ' + seven;
                }else if(num[2] == '8'){
                    str += eight_hundred + ' ' + ninety + ' ' + eight;
                }else if(num[2] == '9'){
                    str += eight_hundred + ' ' + ninety + ' ' + nine;
                }else if(num[1] == '9' && num[2] == '0'){
                    str += eight_hundred + ' ' + ninety;
                }
            }
/*900 */           if(num[0] == '9' && num[1] == '0'){
                if(num[2] == '1'){
                    str += nine_hundred + ' ' + one;
                }else if(num[1] == '0' && num[2] == '2'){
                    str += nine_hundred + ' ' + two;
                }else if(num[1] == '0' && num[2] == '3'){
                    str += nine_hundred + ' ' + three;
                }else if(num[1] == '0' && num[2] == '4'){
                    str += nine_hundred + ' ' + four;
                }else if(num[1] == '0' && num[2] == '5'){
                    str += nine_hundred + ' ' + five;
                }else if(num[1] == '0' && num[2] == '6'){
                    str += nine_hundred + ' ' + six;
                }else if(num[1] == '0' && num[2] == '7'){
                    str += nine_hundred + ' ' + seven;
                }else if(num[1] == '0' && num[2] == '8'){
                    str += nine_hundred + ' ' + eight;
                }else if(num[1] == '0' && num[2] == '9'){
                    str += nine_hundred + ' ' + nine;
                }else if(num[1] == '0' && num[2] == '9'){
                    str += nine_hundred + ' ' + nine;
                }
            }else if(num[0] == '9' && num[1] == '1'){
                if(num[2] == '1'){
                    str += nine_hundred + ' ' + eleven;
                }else if(num[2] == '2'){
                    str += nine_hundred + ' ' + twelve;
                }else if(num[2] == '3'){
                    str += nine_hundred + ' ' + thirteen;
                }else if(num[2] == '4'){
                    str += nine_hundred + ' ' + fourteen;
                }else if(num[2] == '5'){
                    str += nine_hundred + ' ' + fifteen;
                }else if(num[2] == '6'){
                    str += nine_hundred + ' ' + sixteen;
                }else if(num[2] == '7'){
                    str += nine_hundred + ' ' + seventeen;
                }else if(num[2] == '8'){
                    str += nine_hundred + ' ' + eighteen;
                }else if(num[2] == '9'){
                    str += nine_hundred + ' ' + nineteen;
                }else if(num[1] == '1' && num[2] == '0'){
                    str += nine_hundred + ' ' + ten;
                }
            }else if(num[0] == '9' && num[1] == '2'){
                if(num[2] == '1'){
                    str += nine_hundred + ' ' + twenty + ' ' + one;
                }else if(num[2] == '2'){
                    str += nine_hundred + ' ' + twenty + ' ' + two;
                }else if(num[2] == '3'){
                    str += nine_hundred + ' ' + twenty + ' ' + three;
                }else if(num[2] == '4'){
                    str += nine_hundred + ' ' + twenty + ' ' + four;
                }else if(num[2] == '5'){
                    str += nine_hundred + ' ' + twenty + ' ' + five;
                }else if(num[2] == '6'){
                    str += nine_hundred + ' ' + twenty + ' ' + six;
                }else if(num[2] == '7'){
                    str += nine_hundred + ' ' + twenty + ' ' + seven;
                }else if(num[2] == '8'){
                    str += nine_hundred + ' ' + twenty + ' ' + eight;
                }else if(num[2] == '9'){
                    str += nine_hundred + ' ' + twenty + ' ' + nine;
                }else if(num[1] == '2' && num[2] == '0'){
                    str += nine_hundred + ' ' + twenty;
                }
            }else if(num[0] == '9' && num[1] == '3'){
                if(num[2] == '1'){
                    str += nine_hundred + ' ' + thirty + ' ' + one;
                }else if(num[2] == '2'){
                    str += nine_hundred + ' ' + thirty + ' ' + two;
                }else if(num[2] == '3'){
                    str += nine_hundred + ' ' + thirty + ' ' + three;
                }else if(num[2] == '4'){
                    str += nine_hundred + ' ' + thirty + ' ' + four;
                }else if(num[2] == '5'){
                    str += nine_hundred + ' ' + thirty + ' ' + five;
                }else if(num[2] == '6'){
                    str += nine_hundred + ' ' + thirty + ' ' + six;
                }else if(num[2] == '7'){
                    str += nine_hundred + ' ' + thirty + ' ' + seven;
                }else if(num[2] == '8'){
                    str += nine_hundred + ' ' + thirty + ' ' + eight;
                }else if(num[2] == '9'){
                    str += nine_hundred + ' ' + thirty + ' ' + nine;
                }else if(num[1] == '3' && num[2] == '0'){
                    str += nine_hundred + ' ' + thirty;
                }
            }else if(num[0] == '9' && num[1] == '4'){
                if(num[2] == '1'){
                    str += nine_hundred + ' ' + forty + ' ' + one;
                }else if(num[2] == '2'){
                    str += nine_hundred + ' ' + forty + ' ' + two;
                }else if(num[2] == '3'){
                    str += nine_hundred + ' ' + forty + ' ' + three;
                }else if(num[2] == '4'){
                    str += nine_hundred + ' ' + forty + ' ' + four;
                }else if(num[2] == '5'){
                    str += nine_hundred + ' ' + forty + ' ' + five;
                }else if(num[2] == '6'){
                    str += nine_hundred + ' ' + forty + ' ' + six;
                }else if(num[2] == '7'){
                    str += nine_hundred + ' ' + forty + ' ' + seven;
                }else if(num[2] == '8'){
                    str += nine_hundred + ' ' + forty + ' ' + eight;
                }else if(num[2] == '9'){
                    str += nine_hundred + ' ' + forty + ' ' + nine;
                }else if(num[1] == '4' && num[2] == '0'){
                    str += nine_hundred + ' ' + forty;
                }
            }else if(num[0] == '9' && num[1] == '5'){
                if(num[2] == '1'){
                    str += nine_hundred + ' ' + fifty + ' ' + one;
                }else if(num[2] == '2'){
                    str += nine_hundred + ' ' + fifty + ' ' + two;
                }else if(num[2] == '3'){
                    str += nine_hundred + ' ' + fifty + ' ' + three;
                }else if(num[2] == '4'){
                    str += nine_hundred + ' ' + fifty + ' ' + four;
                }else if(num[2] == '5'){
                    str += nine_hundred + ' ' + fifty + ' ' + five;
                }else if(num[2] == '6'){
                    str += nine_hundred + ' ' + fifty + ' ' + six;
                }else if(num[2] == '7'){
                    str += nine_hundred + ' ' + fifty + ' ' + seven;
                }else if(num[2] == '8'){
                    str += nine_hundred + ' ' + fifty + ' ' + eight;
                }else if(num[2] == '9'){
                    str += nine_hundred + ' ' + fifty + ' ' + nine;
                }else if(num[1] == '5' && num[2] == '0'){
                    str += nine_hundred + ' ' + fifty;
                }
            }else if(num[0] == '9' && num[1] == '6'){
                if(num[2] == '1'){
                    str += nine_hundred + ' ' + sixty + ' ' + one;
                }else if(num[2] == '2'){
                    str += nine_hundred + ' ' + sixty + ' ' + two;
                }else if(num[2] == '3'){
                    str += nine_hundred + ' ' + sixty + ' ' + three;
                }else if(num[2] == '4'){
                    str += nine_hundred + ' ' + sixty + ' ' + four;
                }else if(num[2] == '5'){
                    str += nine_hundred + ' ' + sixty + ' ' + five;
                }else if(num[2] == '6'){
                    str += nine_hundred + ' ' + sixty + ' ' + six;
                }else if(num[2] == '7'){
                    str += nine_hundred + ' ' + sixty + ' ' + seven;
                }else if(num[2] == '8'){
                    str += nine_hundred + ' ' + sixty + ' ' + eight;
                }else if(num[2] == '9'){
                    str += nine_hundred + ' ' + sixty + ' ' + nine;
                }else if(num[1] == '6' && num[2] == '0'){
                    str += nine_hundred + ' ' + sixty;
                }
            }else if(num[0] == '9' && num[1] == '7'){
                if(num[2] == '1'){
                    str += nine_hundred + ' ' + seventy + ' ' + one;
                }else if(num[2] == '2'){
                    str += nine_hundred + ' ' + seventy + ' ' + two;
                }else if(num[2] == '3'){
                    str += nine_hundred + ' ' + seventy + ' ' + three;
                }else if(num[2] == '4'){
                    str += nine_hundred + ' ' + seventy + ' ' + four;
                }else if(num[2] == '5'){
                    str += nine_hundred + ' ' + seventy + ' ' + five;
                }else if(num[2] == '6'){
                    str += nine_hundred + ' ' + seventy + ' ' + six;
                }else if(num[2] == '7'){
                    str += nine_hundred + ' ' + seventy + ' ' + seven;
                }else if(num[2] == '8'){
                    str += nine_hundred + ' ' + seventy + ' ' + eight;
                }else if(num[2] == '9'){
                    str += nine_hundred + ' ' + seventy + ' ' + nine;
                }else if(num[1] == '7' && num[2] == '0'){
                    str += nine_hundred + ' ' + seventy;
                }
            }else if(num[0] == '9' && num[1] == '8'){
                if(num[2] == '1'){
                    str += nine_hundred + ' ' + eighty + ' ' + one;
                }else if(num[2] == '2'){
                    str += nine_hundred + ' ' + eighty + ' ' + two;
                }else if(num[2] == '3'){
                    str += nine_hundred + ' ' + eighty + ' ' + three;
                }else if(num[2] == '4'){
                    str += nine_hundred + ' ' + eighty + ' ' + four;
                }else if(num[2] == '5'){
                    str += nine_hundred + ' ' + eighty + ' ' + five;
                }else if(num[2] == '6'){
                    str += nine_hundred + ' ' + eighty + ' ' + six;
                }else if(num[2] == '7'){
                    str += nine_hundred + ' ' + eighty + ' ' + seven;
                }else if(num[2] == '8'){
                    str += nine_hundred + ' ' + eighty + ' ' + eight;
                }else if(num[2] == '9'){
                    str += nine_hundred + ' ' + eighty + ' ' + nine;
                }else if(num[1] == '8' && num[2] == '0'){
                    str += nine_hundred + ' ' + eighty;
                }
            }else if(num[0] == '9' && num[1] == '9'){
                if(num[2] == '1'){
                    str += nine_hundred + ' ' + ninety + ' ' + one;
                }else if(num[2] == '2'){
                    str += nine_hundred + ' ' + ninety + ' ' + two;
                }else if(num[2] == '3'){
                    str += nine_hundred + ' ' + ninety + ' ' + three;
                }else if(num[2] == '4'){
                    str += nine_hundred + ' ' + ninety + ' ' + four;
                }else if(num[2] == '5'){
                    str += nine_hundred + ' ' + ninety + ' ' + five;
                }else if(num[2] == '6'){
                    str += nine_hundred + ' ' + ninety + ' ' + six;
                }else if(num[2] == '7'){
                    str += nine_hundred + ' ' + ninety + ' ' + seven;
                }else if(num[2] == '8'){
                    str += nine_hundred + ' ' + ninety + ' ' + eight;
                }else if(num[2] == '9'){
                    str += nine_hundred + ' ' + ninety + ' ' + nine;
                }else if(num[1] == '9' && num[2] == '0'){
                    str += nine_hundred + ' ' + ninety;
                }
            }
        }
   
    return str;
}
