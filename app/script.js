'use strict';

const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');

const modalRecord = document.querySelector('.modal-record');
const record = document.querySelector('.record');

const closeBtn = document.querySelector('.close-button');
const home = document.querySelector('.home');

const play = document.getElementById('play');
const audio = document.getElementById('audio');
const del = document.querySelector('.del');

modalRecord.classList.add('hidden');

const playSound = () => {
  audio.play();
};

play.addEventListener('click', playSound);

const delElement = () => {
  play.remove();
};
del.addEventListener('click', delElement);

const closeMenu = () => {
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
};

const openMenu = () => {
  overlay.classList.remove('hidden');
  modal.classList.remove('hidden');
};

const closeRecord = () => {
  overlay.classList.add('hidden');
  modalRecord.classList.add('hidden');
};

const openRecord = () => {
  overlay.classList.remove('hidden');
  modalRecord.classList.remove('hidden');
};

closeBtn.addEventListener('click', closeMenu);
closeBtn.addEventListener('click', closeRecord);
overlay.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeRecord);

home.addEventListener('click', openMenu);
record.addEventListener('click', openRecord);

let recorder, gumStream;
const recordButton = document.getElementById('recordButton');
recordButton.addEventListener('click', toggleRecording);

function toggleRecording() {
  if (recorder && recorder.state == 'recording') {
    recorder.stop();
    gumStream.getAudioTracks()[0].stop();
  } else {
    navigator.mediaDevices
      .getUserMedia({
        audio: true,
      })
      .then(function (stream) {
        gumStream = stream;
        recorder = new MediaRecorder(stream);
        recorder.ondataavailable = function (e) {
          let url = URL.createObjectURL(e.data);
          let preview = document.createElement('audio');
          preview.controls = true;
          preview.src = url;
          document.body.appendChild(preview);
        };
        recorder.start();
      });
  }
}
