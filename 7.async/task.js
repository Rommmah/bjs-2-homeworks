class AlarmClock{
	constructor(){
		this.alarmCollection = [],
		this.timerId = null
	}
	addClock(time, callback, id){
		if (!id) throw new Error('error text')
		if (this.alarmCollection.find(item => item.id == id) ) return console.error('Такой id уже существует');
		this.alarmCollection.push({id, time, callback})
	}
	removeClock(id){
		let alarms = this.alarmCollection
		if (alarms.filter(item => item.id == id).legth) return false
		return this.alarmCollection = alarms.filter(item => item.id !== id)
	}
	getCurrentFormattedTime(){
		return new Date().toLocaleTimeString().slice(0,-3)
	}
	start(){
		function checkClock(id) {
			let alarm = this.alarmCollection.find(item => item.id === id)
			if(this.getCurrentFormattedTime() == alarm.time) alarm.callback()
		}
		if(!this.timerId){
			let interval = setInterval( () => {
				this.alarmCollection.forEach(alarm => {
					// console.log(this);
					checkClock.call(this, alarm.id)
				})
			}, 1000);
			this.timerId = interval
		}
	}
	stop(){
		if (this.timerId) {
			clearInterval(this.timerId);
			this.timerId = null;
		}
	}
	printAlarms(){
		this.alarmCollection.forEach( item => console.log(item.id, item.time) )
	}
	clearAlarms(){
		this.stop()
		this.alarmCollection = []
	}
}

function testCase() {
	let alarm = new AlarmClock
	let min = new Date().toLocaleTimeString().slice(0,-3)
	alarm.addClock(min, () => console.log('alarm1'), 1)

	let min1 = new Date()
	min1.setMinutes(min1.getMinutes() + 1)
	min1 = min1.toLocaleTimeString().slice(0,-3)
	let alarm2 = new AlarmClock
	alarm.addClock(min1, () => {
		console.log('alarm2')
		alarm.removeClock(2)
	}, 2)

	let min2 = new Date()
	min2.setMinutes(min2.getMinutes() + 2)
	min2 = min2.toLocaleTimeString().slice(0,-3)
	let alarm3 = new AlarmClock
	alarm.addClock(min2, () => {
		console.log('alarm3')
		alarm.clearAlarms()
		alarm.printAlarms()
	}, 3)

	alarm.printAlarms()

	alarm.start()
}

testCase();