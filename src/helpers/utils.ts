

export const refactorYear = (year: string) => {



    if (!isNaN(Number(year))) {
        return year;
    }

    const formated = year.substring(0,year.length-1);
    return formated;

}