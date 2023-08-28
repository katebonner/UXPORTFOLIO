export const derivationCodeString = `
import numpy as np
import matplotlib.pyplot as plt

# Set the background color using rc parameters
plt.style.use('dark_background')
plt.rcParams['axes.facecolor'] = '#191919'
plt.rcParams['figure.facecolor'] = '#191919'

# Constants
sigma = 2
c = 1
hbar = 1
m = 1
p = 4

def wavefunction(x, t, p):
    i = complex(0., 1.)
    factor = np.sqrt(np.pi / (1. / (2. * sigma**2)) + i * t / (hbar * m))
    exponential = np.exp(-x**2 * sigma**2 / (2. * hbar * (1. + i * t * sigma**2) / (hbar * m)) 
                     + i * p * x / (sigma**2 * hbar * (1. + i * t * sigma**2) / (hbar * m)))
                     
    return c * factor * exponential

# Variables
x_values = np.arange(-50. * sigma, 50. * sigma, 0.01 * sigma)
deltat = .1
tf = deltat * 50

plt.ion()
with open('gaussianpsi.txt', 'w') as f:
    while True:  # Infinite loop for continuous animation
        t = 0
        while t < tf:
            plt.pause(.0001)
            plt.cla()
            y_values = wavefunction(x_values, t, p)
        
            plt.plot(x_values, y_values.real, label='Real Part', color='#fff', linestyle='-')
            plt.plot(x_values, y_values.imag, label='Imaginary Part', color='#fff', linestyle='--')
            plt.ylim(ymin=-10., ymax=10.)
            plt.legend()  # Show legend indicating the colors
            
            for x_val, y_val in zip(x_values, y_values):
                s = '{: E},{: E},{: E},{: E}\r\n'.format(t, x_val, y_val.real, y_val.imag)
                f.write(s)

            t += deltat


  `;
