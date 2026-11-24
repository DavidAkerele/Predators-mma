'use client';

import { useState } from 'react';

type Day = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday';
type Discipline = 'BJJ' | 'Kickboxing' | 'MMA';
type Session = { day: Day; start: string; end: string; name: string; discipline: Discipline; mat?: string };

const days: Day[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const sessions: Session[] = [
  { day: 'Monday', start: '17:30', end: '18:30', name: 'BJJ Fundamentals', discipline: 'BJJ' },
  { day: 'Monday', start: '18:30', end: '19:30', name: 'Kickboxing Fundamentals', discipline: 'Kickboxing' },
  { day: 'Monday', start: '18:30', end: '19:30', name: 'MMA Advanced', discipline: 'MMA', mat: 'Mat B' },
  { day: 'Monday', start: '19:30', end: '21:00', name: 'BJJ Gi Advanced', discipline: 'BJJ' },
  { day: 'Tuesday', start: '17:30', end: '18:30', name: 'Kickboxing Fundamentals', discipline: 'Kickboxing' },
  { day: 'Tuesday', start: '18:30', end: '19:30', name: 'BJJ Fundamentals', discipline: 'BJJ' },
  { day: 'Tuesday', start: '18:30', end: '19:30', name: 'Kickboxing Advanced', discipline: 'Kickboxing', mat: 'Mat B' },
  { day: 'Tuesday', start: '19:30', end: '21:00', name: 'BJJ No-Gi Advanced', discipline: 'BJJ' },
  { day: 'Wednesday', start: '17:30', end: '18:30', name: 'BJJ Fundamentals', discipline: 'BJJ' },
  { day: 'Wednesday', start: '18:30', end: '19:30', name: 'Kickboxing Fundamentals', discipline: 'Kickboxing' },
  { day: 'Wednesday', start: '18:30', end: '19:30', name: 'MMA Advanced', discipline: 'MMA', mat: 'Mat B' },
  { day: 'Wednesday', start: '19:30', end: '21:00', name: 'BJJ Gi Advanced', discipline: 'BJJ' },
  { day: 'Thursday', start: '17:30', end: '18:30', name: 'Kickboxing Fundamentals', discipline: 'Kickboxing' },
  { day: 'Thursday', start: '18:30', end: '19:30', name: 'BJJ Fundamentals', discipline: 'BJJ' },
  { day: 'Thursday', start: '18:30', end: '19:30', name: 'Kickboxing Advanced', discipline: 'Kickboxing', mat: 'Mat B' },
  { day: 'Thursday', start: '19:30', end: '21:00', name: 'BJJ No-Gi Advanced', discipline: 'BJJ' },
  { day: 'Friday', start: '17:30', end: '18:30', name: 'BJJ Fundamentals', discipline: 'BJJ' },
  { day: 'Friday', start: '18:30', end: '19:30', name: 'Kickboxing Fundamentals', discipline: 'Kickboxing' },
  { day: 'Saturday', start: '11:00', end: '12:00', name: 'BJJ Fundamentals', discipline: 'BJJ' },
  { day: 'Saturday', start: '12:00', end: '13:00', name: 'Kickboxing Fundamentals', discipline: 'Kickboxing' },
  { day: 'Saturday', start: '12:00', end: '13:00', name: 'BJJ Gi Advanced', discipline: 'BJJ', mat: 'Mat B' },
  { day: 'Saturday', start: '13:00', end: '14:00', name: 'BJJ Open Mat', discipline: 'BJJ' },
  { day: 'Saturday', start: '14:00', end: '15:00', name: 'MMA Sparring', discipline: 'MMA' },
];

const disciplines: Array<'All classes' | Discipline> = ['All classes', 'BJJ', 'Kickboxing', 'MMA'];

export default function Schedule() {
  const [day, setDay] = useState<'All week' | Day>('All week');
  const [discipline, setDiscipline] = useState<'All classes' | Discipline>('All classes');
  const visibleDays = day === 'All week' ? days : [day];
  const visibleSessions = sessions.filter((session) => discipline === 'All classes' || session.discipline === discipline);

  return (
    <section className="section timetable-section" id="timetable" aria-labelledby="timetable-title">
      <div className="wrap">
        <div className="section-heading timetable-heading">
          <div><p className="eyebrow">Plan your week</p><h2 id="timetable-title">FIND YOUR<br />NEXT CLASS.</h2></div>
          <p>The adult class timetable from the academy handout. Fundamentals are the place to begin; advanced sessions are marked clearly.</p>
        </div>
        <div className="schedule-controls">
          <div className="schedule-control-group" aria-label="Choose a day">
            {(['All week', ...days] as Array<'All week' | Day>).map((item) => (
              <button type="button" key={item} className={day === item ? 'control active' : 'control'} aria-pressed={day === item} onClick={() => setDay(item)}>{item === 'All week' ? 'All week' : item.slice(0, 3)}</button>
            ))}
          </div>
          <div className="schedule-control-group discipline-controls" aria-label="Filter by discipline">
            {disciplines.map((item) => (
              <button type="button" key={item} className={discipline === item ? 'control active' : 'control'} aria-pressed={discipline === item} onClick={() => setDiscipline(item)}>{item}</button>
            ))}
          </div>
        </div>
        <div className={'schedule-grid' + (day === 'All week' ? '' : ' single-day')}>
          {visibleDays.map((item) => {
            const daySessions = visibleSessions.filter((session) => session.day === item);
            return (
              <div className="schedule-day" key={item}>
                <div className="schedule-day-heading"><h3>{item}</h3><span>{daySessions.length} {daySessions.length === 1 ? 'class' : 'classes'}</span></div>
                {daySessions.length ? (
                  <ol className="schedule-list">
                    {daySessions.map((session) => (
                      <li className={'session session-' + session.discipline.toLowerCase()} key={session.start + session.name + (session.mat || '')}>
                        <span className="session-time">{session.start}<span>—</span>{session.end}</span>
                        <div className="session-details"><strong>{session.name}</strong>{session.mat && <span>{session.mat} · runs alongside the main class</span>}</div>
                        <span className="session-dot" aria-hidden="true" />
                      </li>
                    ))}
                  </ol>
                ) : <p className="schedule-empty">No {discipline === 'All classes' ? '' : discipline + ' '}class listed for this day.</p>}
              </div>
            );
          })}
        </div>
        <div className="schedule-foot">
          <p><strong>Weekday daytime</strong> / Private lessons and fighter training are shown from 11:00–15:00 on the printed timetable. Contact the academy to arrange a session.</p>
          <p>Sunday has no classes listed. Class times may change; check with us before your first visit.</p>
        </div>
      </div>
    </section>
  );
}
