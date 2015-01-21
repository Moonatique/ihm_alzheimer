angular.module('utilFilters', []).filter('dateFR', function($filter) {
  return function(input) {
    var months = {
    	January :'Janvier',
	    February :'Fevrier',
	    March : 'Mars',
	    April : 'Avril',
	    May : 'Mai',
	    June : 'Juin',
	    July : 'Juillet',
	    August : 'Aout',
	    September : 'Septembre',
	    November : 'Novembre',
	    December : 'Decembre'
    }
    
    var days = {
    	Sunday : 'Dimanche',
	    Monday : 'Lundi', 
	    Tuesday : 'Mardi', 
	    Wednesday : 'Mercredi', 
	    Thursday : 'Jeudi', 
	    Friday : 'Vendredi', 
	    Saturday : 'Samedi'
    }
    	

    return days[$filter('date')(input, 'EEEE')] + ' ' + $filter('date')(input, 'dd') + ' ' + months[$filter('date')(input, 'MMMM')] + ', ' + $filter('date')(input, 'HH:mm', 'UTC+1');
};});
